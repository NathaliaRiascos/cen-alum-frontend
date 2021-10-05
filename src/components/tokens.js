const choices = {
    colors: {
      brand: {
        lightBlue: '#1890FF',
        mediumBlue: '#146FC3',
        mediumblackBlue: '#04192C',
        blackBlue: '#000C17',
        mediumBlack: '#52575D'
      },
  
      transparent: 'transparent',
  
      black: '#000',
      white: '#fff',
  
      gray: {
        100: '#FAFAFA',
        200: '#F0F0F0',
        300: '#D4D4D4',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#787878'
      }
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem'
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      max: {
        xs: '419px',
        sm: '639px',
        md: '767px',
        lg: '1023px',
        xl: '1279px'
      }
    },
    fontFamily: {
      serif: ['Roboto Slab', '"Times New Roman"', 'serif'],
      sans: ['Apercu', 'Arial', 'sans-serif'],
      mono: ['"Roboto Mono"', 'Consolas', 'monospace'],
      quicksand: [ '"Quicksand"', 'sans-serif']
    },
    fontSize: {
      base: '16px',
      xs: '.75rem',
      sm: '.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.375rem'
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    },
    letterSpacing: {
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em'
    },
    // prettier-ignore
    shadows: {
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: 'none',
      down: {
        sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
      },
      up: {
        sm: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 -2px 4px 0 rgba(0, 0, 0, 0.06)",
      }
    },
    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh'
    },
    minWidth: {
      '0': '0',
      full: '100%'
    },
    maxWidht: {
      full: '100%'
    },
    opacity: {
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1'
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.5rem',
      full: '9999px'
    },
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50'
    }
}

const decisions = {
    colors: {
      primary: choices.colors.brand.lightBlue,
      textLight: choices.colors.white,
      textDark: choices.colors.brand.mediumBlack
    },
    container: {
      maxWidht: choices.maxWidht
    },
    heading: {
      fontSizeH1: choices.fontSize.xl,
      fontSizeH2: choices.fontSize.lg
    },
    input: {
      disable: choices.colors.gray[200]
    }
}

module.exports = {
    choices,
    decisions
}