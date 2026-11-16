#!/usr/bin/env python3
"""Dimeyes · measure the spacing of a graphic piece built in HTML (post, story, poster).

Renders the page in headless Chrome at the canvas size, runs measure-graphic.js once the fonts
and images have loaded, and prints the report: text margins, the gaps between line bodies, text styles,
alignment axes, the safe area and the logo, with FAIL / WARN / INFO flags from references/eye.md §4.

usage: python3 measure-graphic.py corrected.html --size 1080x1350 [--safe 96,80,120,80] [--json report.json]

--safe is top,right,bottom,left in px; leave it out to use the platform's safe area for the canvas
shape (feed square, feed portrait, story). Pass the product's own safe area when it has one.
Needs Google Chrome, Chromium or Edge; set CHROME to its path if it isn't found. Standard library only.
Exit code: 0 when there is no FAIL, 1 when there is at least one, 2 when the page couldn't be measured.
"""
import argparse, html, json, os, re, shutil, signal, subprocess, sys, tempfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
TIMEOUT = 90


def die(msg):
    print('measure-graphic: ' + msg, file=sys.stderr)
    sys.exit(2)  # 1 means the piece has a FAIL


def find_chrome():
    if os.environ.get('CHROME'):
        return os.environ['CHROME']
    for p in ('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
              '/Applications/Chromium.app/Contents/MacOS/Chromium',
              '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
              r'C:\Program Files\Google\Chrome\Application\chrome.exe',
              r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'):
        if Path(p).exists():
            return p
    for name in ('google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'chrome', 'msedge'):
        if shutil.which(name):
            return shutil.which(name)
    die('Chrome not found. Set CHROME to the browser path.')


def kill_tree(proc):
    """Chrome leaves renderer helpers behind when only its main process dies, so kill its whole group."""
    try:
        os.killpg(proc.pid, signal.SIGKILL) if hasattr(os, 'killpg') else proc.kill()
    except OSError:
        pass  # already gone
    proc.wait()


def main():
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    ap.add_argument('html')
    ap.add_argument('--size', required=True, help='canvas WxH in px, e.g. 1080x1350')
    ap.add_argument('--safe', help='top,right,bottom,left in px (default: the platform safe area for the shape)')
    ap.add_argument('--json', help='also write the full report here')
    a = ap.parse_args()  # exits 2 on bad arguments

    m = re.fullmatch(r'(\d+)[x×](\d+)', a.size)
    if not m:
        die('--size must look like 1080x1350')
    w, h = int(m.group(1)), int(m.group(2))
    if not (w and h):
        die('--size needs a width and a height above 0')
    opts = {'width': w, 'height': h}
    if a.safe:
        try:
            opts['safe'] = [int(v) for v in a.safe.split(',')]
        except ValueError:
            opts['safe'] = []
        if len(opts['safe']) != 4:
            die('--safe needs four whole numbers: top,right,bottom,left')

    src = Path(a.html).resolve()
    try:
        page = src.read_text(encoding='utf-8')
    except OSError as e:
        die(f'cannot read {a.html}: {e.strerror}.')
    except UnicodeDecodeError:
        die(f'{a.html} is not UTF-8 text.')
    js = (HERE / 'measure-graphic.js').read_text(encoding='utf-8').rstrip().rstrip(';')
    probe = (
        '<script>window.DIMEYES_OPTS=' + json.dumps(opts) + ';'
        'window.__dimeyesRun=function(){return (\n' + js + '\n);};'
        'Promise.all([document.fonts?document.fonts.ready:0,new Promise(function(r){'
        'document.readyState==="complete"?r():addEventListener("load",r);})]).then(function(){setTimeout(function(){'
        'var out;try{out=JSON.stringify(window.__dimeyesRun());}catch(e){out=JSON.stringify({error:String(e&&e.stack||e)});}'
        'var pre=document.createElement("pre");pre.id="dimeyes-report";pre.style.display="none";pre.textContent=out;'
        'document.body.appendChild(pre);},400);});</script>'
    )
    page = re.sub(r'</body\s*>', lambda _: probe + '</body>', page, count=1, flags=re.I) if re.search(r'</body\s*>', page, re.I) else page + probe

    chrome = find_chrome()
    signal.signal(signal.SIGTERM, lambda *_: die('stopped.'))  # so the cleanup below still runs
    tmp = profile = proc = None
    try:
        # The probe page sits next to the original so relative paths (photos, fonts) still resolve.
        try:
            fd, tmp = tempfile.mkstemp(prefix='.dimeyes-measure-', suffix='.html', dir=str(src.parent))
            with os.fdopen(fd, 'w', encoding='utf-8') as f:
                f.write(page)
            profile = tempfile.mkdtemp(prefix='dimeyes-chrome-')
        except OSError as e:
            die(f'cannot write the probe page next to {src.name}: {e}')
        # File access lets the measure read a local logo's pixels to find its ink.
        cmd = [chrome, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
               '--allow-file-access-from-files', f'--user-data-dir={profile}', '--virtual-time-budget=8000',
               f'--window-size={w},{h}', '--dump-dom', Path(tmp).as_uri()]
        try:
            proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, text=True, encoding='utf-8',
                                    start_new_session=True)
        except OSError as e:
            die(f'cannot start Chrome ({e}).')
        try:
            dom = proc.communicate(timeout=TIMEOUT)[0]
        except subprocess.TimeoutExpired:
            die(f'Chrome did not finish in {TIMEOUT} s; no report.')
    finally:
        if proc:
            kill_tree(proc)
        if tmp:
            os.unlink(tmp)
        if profile:
            shutil.rmtree(profile, ignore_errors=True)

    found = re.search(r'<pre id="dimeyes-report"[^>]*>(.*?)</pre>', dom or '', re.S)
    if not found:
        die('the page did not finish rendering; no report.')
    try:
        rep = json.loads(html.unescape(found.group(1)).strip())
    except ValueError:
        die('the measure returned no readable report.')
    if 'error' in rep:
        die('the measure failed in the page: ' + rep['error'].strip().split('\n')[0])
    print(rep['summary'])
    if a.json:
        try:
            Path(a.json).write_text(json.dumps(rep, indent=1, ensure_ascii=False), encoding='utf-8')
        except OSError as e:
            die(f'cannot write {a.json}: {e}')
    sys.exit(1 if rep['counts']['FAIL'] else 0)


if __name__ == '__main__':
    main()
