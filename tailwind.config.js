/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1b6d24',
        'primary-container': '#5dac5b',
        secondary: '#005faf',
        'secondary-container': '#54a0fe',
        tertiary: '#006e1c',
        'tertiary-container': '#4caf50',
        surface: '#f5faff',
        'surface-container': '#e1f0fb',
        'surface-container-low': '#e9f5ff',
        'surface-container-lowest': '#ffffff',
        'surface-container-high': '#dbeaf5',
        'surface-container-highest': '#d6e5ef',
        'on-surface': '#0f1d25',
        'on-surface-variant': '#3f4a3c',
        'on-primary': '#ffffff',
        'on-primary-container': '#003c0a',
        'on-tertiary-container': '#003c0b',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
        'outline-variant': '#becab9',
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
      fontFamily: {
        headline: ['Manrope'],
        body: ['Inter'],
        label: ['Inter'],
      },
    },
  },
  plugins: [],
}

