module.exports = {
    presets: [
      [
        require('@babel/preset-react'),
        {
          runtime: 'automatic',
        },
      ],
      require('@babel/preset-typescript'),
      require('@babel/preset-env'),
    ],
    plugins: [
      process.env.NODE_ENV === 'development' && require.resolve('react-refresh/babel'),
    ].filter(Boolean),
  };
  