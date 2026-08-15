/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['selector', "[data-theme='dark']"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '3rem',
      },
      screens: {
        '2xl': '1360px',
      },
    },
    extend: {
      colors: {
        // Theme-swapping canvas tokens (values live in CSS variables).
        // Class names are preserved from the dark-only build.
        bg: {
          primary: 'rgb(var(--bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          elevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
        },
        // Primary readable text — historically named "chalk".
        // In dark theme resolves to warm white; in light theme resolves to near-black.
        chalk: {
          DEFAULT: 'rgb(var(--text-primary) / <alpha-value>)',
          soft: 'rgb(var(--text-secondary) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)',
        },
        // Borders / dividers — semantic subtle/strong.
        // Class names carry the "dark" suffix from the dark-only build,
        // but the actual value swaps by theme.
        line: {
          dark: 'var(--line-color)',
          darkStrong: 'var(--line-strong-color)',
        },
        // Overlay tints for subtle hover / pressed backgrounds.
        overlay: {
          hover: 'var(--overlay-hover-color)',
          active: 'var(--overlay-active-color)',
          strong: 'var(--overlay-strong-color)',
        },
        brand: {
          DEFAULT: '#122F82',
          hover: '#0E2668',
          soft: 'rgba(18,47,130,0.10)',
          border: 'rgba(18,47,130,0.32)',
        },
        // Always-dark palette. Used for panels that stay dark in both themes
        // (Hero, modal overlay, always-dark accent bands).
        static: {
          dark: '#0B0B0E',
          darker: '#08080B',
          darkElevated: '#22242B',
          chalk: '#F5F5F7',
          chalkSoft: '#B7B8BE',
          chalkMuted: '#7C7E86',
          lineDark: 'rgba(255,255,255,0.08)',
          lineDarkStrong: 'rgba(255,255,255,0.16)',
        },
        state: {
          success: '#16A34A',
          warning: '#D97706',
          error: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '10px',
        md: '10px',
        lg: '14px',
        xl: '20px',
        '2xl': '28px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)',
        elevated: '0 4px 16px rgba(0,0,0,0.10), 0 12px 32px rgba(0,0,0,0.12)',
        modal: '0 24px 60px rgba(0,0,0,0.40), 0 8px 24px rgba(0,0,0,0.24)',
        ringBrand: '0 0 0 4px rgba(18,47,130,0.28)',
      },
      maxWidth: {
        container: '1320px',
        prose: '68ch',
      },
      spacing: {
        section: '6rem',
        'section-lg': '8rem',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 200ms cubic-bezier(0.22, 1, 0.36, 1) both',
        scaleIn: 'scaleIn 220ms cubic-bezier(0.22, 1, 0.36, 1) both',
        slideUp: 'slideUp 320ms cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
