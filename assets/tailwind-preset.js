/**
 * dimeyes Tailwind preset (v3): Dimitri Conejo Sanz's system, from the Cathopic
 * production config and Christicons. Values mirror tokens.css; keep them in sync.
 *
 *   // tailwind.config.js
 *   module.exports = { presets: [require('./tailwind-preset.js')], content: [...] }
 *
 * Spacing is REPLACED, not extended: every p-/m-/gap-/w- class lands on his scale.
 * Keys are his Cathopic remap, so p-3 = 8px and p-4 = 12px (not Tailwind's 12/16).
 * Left out on purpose: Cathopic's 3.5 = 14 and 7.5 = 28 (off his scale).
 * 10 is his value; write it as he does, as the arbitrary gap-[10px] / px-[10px].
 */

const gray = {
  50: '#FBFDFD',
  100: '#F4F7F7',
  200: '#E3E8E8',
  250: '#ECF0F0', // input and search fill
  300: '#CED6D6',
  400: '#ABB6B7', // decorative only (2.1:1 on white)
  500: '#838F91', // placeholders
  600: '#636D6F', // secondary text
  700: '#434B4D',
  800: '#272D2F',
  850: '#1F2526',
  900: '#141819', // ink
  950: '#0B0E0F',
};

const primary = {
  50: '#E6F7F7',
  100: '#CDF0F1',
  200: '#A3E1E5',
  300: '#74CCD3',
  400: '#45B2BD',
  500: '#007D8C',
  600: '#006C7A',
  700: '#005A67',
  900: '#003D47', // production has no 800
  DEFAULT: '#007D8C',
};

module.exports = {
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1100px', xl: '1300px', '2xl': '1440px' },

    spacing: {
      0: '0px',
      px: '1px',
      1: '2px',
      1.5: '6px', // tolerated; note 1.5 (6) > 2 (4) in this remap
      2: '4px',
      2.5: '6px', // Cathopic maps 2.5 to 6 as well (an ordering quirk)
      3: '8px',
      4: '12px',
      5: '16px',
      6: '20px',
      7: '24px',
      8: '32px',
      8.5: '36px', // tolerated
      9: '40px',
      9.5: '44px', // a control height (h-9.5), not spacing
      10: '48px',
      11: '56px',
      12: '64px',
      13: '72px',
      14: '80px',
      15: '96px',
      16: '112px',
      17: '128px',
      18: '144px',
      19: '160px', // from here the scale continues +16
      20: '176px',
      21: '192px',
      22: '208px',
      24: '240px',
    },

    // [size, line-height]: 1.55 up to 18px, 1.15 for headings, 1.0 for the hero display
    fontSize: {
      '2xs': ['10px', { lineHeight: '1' }],
      xs: ['12px', { lineHeight: '1.5' }],
      sm: ['14px', { lineHeight: '1.55' }],
      base: ['16px', { lineHeight: '1.55' }],
      'base-plus': ['18px', { lineHeight: '1.55' }],
      md: ['20px', { lineHeight: '1.15' }],
      lg: ['24px', { lineHeight: '1.15' }],
      xl: ['28px', { lineHeight: '1.15' }],
      '2xl': ['32px', { lineHeight: '1.15' }],
      '3xl': ['36px', { lineHeight: '1.15' }],
      '4xl': ['40px', { lineHeight: '1.15' }],
      '5xl': ['48px', { lineHeight: '1.15' }],
      '7xl': ['64px', { lineHeight: '1' }],
    },

    fontFamily: {
      sans: ['Inter', '"Inter var"', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      brand: ['"Basier Square"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], // option (Christicons)
      mono: ['"Basier Square Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      display: ['"Instrument Serif"', '"Instrument Serif Fallback"', 'Georgia', 'serif'], // weight 400 only
      serif: ['"Source Serif 4"', 'Georgia', 'serif'], // reading serif of the Tiempos / Source Serif type (app boards)
    },

    borderRadius: {
      none: '0px',
      sm: '2px',
      DEFAULT: '4px',
      md: '8px',
      semi: '10px', // menu-item, semi-rounded buttons on mobile
      lg: '12px',
      xl: '12px',
      '2xl': '16px',
      '3xl': '20px',
      '4xl': '24px',
      '5xl': '32px',
      full: '9999px',
    },

    // Low opacity, offset + blur. Only for floating or selected elements.
    boxShadow: {
      none: 'none',
      sm: '0 1px 2px rgb(0 0 0 / 0.05)',
      DEFAULT: '0 3px 6px rgb(0 0 0 / 0.03)',
      popover: '0 10px 30px rgb(0 0 0 / 0.12)',
      dropdown: '0 10px 50px rgb(0 0 0 / 0.15)',
      overlay: '0 15px 60px rgb(0 0 0 / 0.18)',
      btn: '0 1px 2px rgb(20 24 25 / 0.045), 0 1px 1px rgb(20 24 25 / 0.025), inset 0 1px 0 rgb(255 255 255 / 0.1)',
      'btn-filled': '0 1px 2px rgb(20 24 25 / 0.07), 0 2px 8px rgb(20 24 25 / 0.05), inset 0 1px 0 rgb(255 255 255 / 0.1)',
      'btn-hover': '0 4px 10px rgb(20 24 25 / 0.085), 0 1px 3px rgb(20 24 25 / 0.05)',
      'btn-active': 'inset 0 1px 2px rgb(20 24 25 / 0.1)',
      'focus-inset': `inset 0 0 0 2px ${gray[900]}`, // his input focus
      focus: `0 0 0 2px #FFFFFF, 0 0 0 4px ${gray[900]}`, // 2px ink ring at offset 2
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      white: '#FFFFFF',
      ink: gray[900],
      gray,
      primary,
      success: { 50: '#E9FAED', 500: '#088E4D', 600: '#00783E', DEFAULT: '#088E4D' },
      info: { 50: '#E8F8FF', 500: '#0396C6', 600: '#007DA7', 800: '#004C69', DEFAULT: '#0396C6' },
      warning: { 50: '#FFF8E2', 500: '#F2BD00', 700: '#A68000', 800: '#7F6200', DEFAULT: '#F2BD00' },
      danger: { 50: '#FFEFEE', 500: '#E22D45', 700: '#97182A', DEFAULT: '#E22D45' },
      scrim: 'rgb(20 24 25 / 0.6)',
    },

    extend: {
      fontWeight: { ui: '550', heading: '630' },
      letterSpacing: {
        display: '-0.044em',
        title: '-0.035em',
        caps: '0.05em',
      },
      maxWidth: { container: '1440px', content: '1000px', prose: '600px' },
      transitionDuration: {
        DEFAULT: '180ms',
        press: '140ms',
        color: '150ms',
        exit: '160ms',
        hover: '180ms',
        popover: '180ms',
        modal: '220ms',
        expand: '220ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'out-strong': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)',
        drawer: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      scale: { 97: '0.97' },
    },
  },
};
