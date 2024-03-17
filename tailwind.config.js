/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '4xl': { max: '1760px' },
      '3xl': { max: '1640px' },
      '2xl': { max: '1440px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '940px' },
      sm: { max: '540px' },
    },
    container: {
      padding: '3rem',
      center: true,
    },
    extend: {
      colors: {
        basic: '#05E077',
        light_basic: '#1af78c',
        mainForm: '#40FF3D',
        bg_icon: '#3D3D3D',
        mobile_text: '#888D8B',
        basic_icon: '#B9BFBD',
        bg_user_icon: '#252525',
        bg_basic: '#262626',
        backgroundCards: '#151515',
        second: '#02A46D',
        border: '#2F2F2F',
        backgroundBasic: '#171717',
        bg_table: '#121212',
        bg_classic: '#282828',
      },
      fontFamily: {
        Exo2: ["'Exo 2', sans-serif"],
        'Benzim-medium': ["'Benzim-Medium', sans-serif"],
        'Benzim-bold': ["'Benzim-Bold', sans-serif"],
        Lato: ["'Lato', sans-serif"],
        Montserrat: ["'Montserrat', sans-serif"],
      },
    },
  },
  plugins: [],
};
