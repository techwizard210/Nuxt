const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        extend: {
            width: {
                'origin': '360px',
                'login_text': '39px',
                'landing_img': '418px',
                'landing_back': '557px',
                'tab': '159.5px',
                'content_h': '280px',
            },
            height: {
                'gh': '5px',
                'nav': '67px',
                'login_text': '19px',
                'footer': '88px',
                'landing_text': '100px',
                'landing_img': '405px',
                'landing_back': '659px',
            },
            gradientColorStops: theme => ({
                ...theme('colors'),
                'primary': '#319795',
                'secondary': '#3182ce',
            }),
            borderRadius: {
                'br': '12px'
            },
            boxShadow: {
                '3xl': '0 3px 6px #00000029',
                '4xl': '0px -1px 3px #00000033',
            },
            colors: {
                'user': '#319795',
                'landing': '#2D3748',
                'tab': '#81E6D9',
                'content_h': '#4A5568',
                'item_num': '#718096',
                'circle': '#F7FAFC',
            },
            margin: {
                'login_t': '26px',
                'login_l': '304px',
                'footer_t': '556px',
                'landing_t': '18px',
                '100x': '100px',
            },
            fontFamily: {
                'sans': ['Lato', 'Sans-serif']
            },
            fontSize: {
                '2xl': '1.7rem',
            },
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                }
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.3s ease-out'
            },
            letterSpacing: {
                landing: '1.26px'
            },
        },
    },
    variants: {
        extend: {
            boxShadow: ['active'],
        }
    }
}