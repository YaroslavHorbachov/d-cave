/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: '',
        darkTheme: 'dark',
    },
};
