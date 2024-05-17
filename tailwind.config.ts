import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './Components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: '15px'
            }
        },
        screens: {
            xs: '320px',
            sm: '640px',
            md: '768px',
            mdlg: '959px',
            lg: '960px',
            lgmd: '1024px',
            xl: '1200px'
        },
        extend: {
            colors: {
                primary: '#0a0a0a',
                accent: '#B809C3'
            },
            backgroundImage: {
                site: "url('./images/site-bg.jpg')",
                about: "url('./images/about.png')",
                services: "url('./images/services.png')"
            },
            animation: {
                spotlight: 'spotlight 2s ease .75s 1 forwards'
            },
            keyframes: {
                spotlight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translate(-72%, -62%) scale(0.5)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translate(-50%,-40%) scale(1)'
                    }
                }
            }
        }
    },
    plugins: []
};
export default config;
