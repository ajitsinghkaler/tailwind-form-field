module.exports = (isProd) => ({
    prefix: '',
    purge: {
      enabled: isProd,
      content: [
        '**/*.html',
        '**/*.ts',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        transformOrigin: {
          "0": "0%",
        },
        zIndex: {
          "-1": "-1",
        },
      },
    },
    variants: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
      extend: {},
    },
    plugins: [],
});
