module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-sort-media-queries'),
    require('postcss-combine-duplicated-selectors'),
    process.env.NODE_ENV !== 'development' && require('cssnano')({
      preset: [
        'advanced',
        {
          discardComments: {
            removeAll: true,
          },
          zindex: false,
        },
      ],
    }),
  ],
};
