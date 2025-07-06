

// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // make sure your paths are right
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 10s linear infinite',
            },
        },
    },
    plugins: [],
};
