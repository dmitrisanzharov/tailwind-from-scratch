module.exports = {
    plugins: [require('tailwindcss'), require('autoprefixer')],
    theme: {
        extend: {
            fontSize: {
                massive: '10rem'
            },
            colors: {
                wacky_color: '#ff00ff'
            },
            fontFamily: {
                modak: ['Modak', 'sans-serif']
            }
        }
    }
};
