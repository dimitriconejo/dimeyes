#!/usr/bin/env python3
"""Measure a rendered group against the boundaries you chose for its composition.

Pass a JSON file or stdin. Example:
{"field": {"y": [156, 732]}, "ink": [[124, 190, 946, 552]]}

Ink rectangles use [left, top, right, bottom] in a shared coordinate system,
with y increasing downwards. Supply x, y, or both in field. Set scale to the
viewing width divided by the source width for results in viewing-size units.
A negative clearance means the group crosses a boundary. A positive centre
offset means rightward or downward displacement from the field's midpoint.
"""

import argparse
import json
import math
import sys


def coordinates(value, count, label):
    if not isinstance(value, list) or len(value) != count:
        raise ValueError(f'{label} requires {count} coordinates')
    if any(type(n) not in (int, float) or not math.isfinite(n) for n in value):
        raise ValueError(f'{label} requires finite numbers')
    return value


def measure(data):
    if not isinstance(data, dict):
        raise ValueError('expected a JSON object')
    field = data.get('field')
    if not isinstance(field, dict) or not field or set(field) - {'x', 'y'}:
        raise ValueError('field requires x, y, or both')
    ink = data.get('ink')
    if not isinstance(ink, list) or not ink:
        raise ValueError('ink requires one or more visible rectangles')
    for box in ink:
        left, top, right, bottom = coordinates(box, 4, 'ink rectangle')
        if right < left or bottom < top:
            raise ValueError('ink rectangle edges are reversed')
    scale = data.get('scale', 1)
    if type(scale) not in (int, float) or not math.isfinite(scale) or scale <= 0:
        raise ValueError('scale must be a finite positive number')

    result = {}
    for axis, index, start, end in [('x', 0, 'left', 'right'), ('y', 1, 'top', 'bottom')]:
        if axis not in field:
            continue
        low, high = coordinates(field[axis], 2, f'field.{axis}')
        if high <= low:
            raise ValueError(f'field.{axis} must span a positive distance')
        before = (min(box[index] for box in ink) - low) * scale
        after = (high - max(box[index + 2] for box in ink)) * scale
        result[axis] = {start: before, end: after, 'center_offset': (before - after) / 2}
    return result


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('input', nargs='?', type=argparse.FileType('r', encoding='utf-8'), default=sys.stdin)
    args = parser.parse_args()
    try:
        print(json.dumps(measure(json.load(args.input)), ensure_ascii=False, allow_nan=False, indent=2))
    except (ValueError, OverflowError, OSError) as exc:
        parser.error(str(exc))
