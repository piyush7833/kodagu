/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'sl': '430px',
        '9xl': '128rem',
      },
      width:{
        'sw':"97%",
         'menu':"125px",
         "wprofile":"110px",
         "wcprofile":"130px",
         "social":"240px",
         "head":"1110px",
         "others":"230px",
         "last":"450px"
      },
      height:{
        'sm':'90vh',
        'menu':'120px',
        "hprofile":"110px",
        "hcprofile":"130px",
        "social":"60px",
        "head":"1015px",
        "last":"340px"
      },
    },
  },
  plugins: [],
}
