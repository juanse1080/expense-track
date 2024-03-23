const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0ea5e9',
          DEFAULT: '#0369a1',
          dark: '#0c4a6e',
        },
        silver: {
          DEFAULT: '#ACAFC7',
        },
      },
      borderRadius: {
        input: '9px',
      },
      fontSize: {
        xs: '11px',
        sm: '0.75rem',
      },
    },
  },
  plugins: [],
};
