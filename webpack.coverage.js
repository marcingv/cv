const path = require('path');

// Konfiguracja webpack wykorzystywna podczas uruchamiania testow e2e wraz z code coverage

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: '@jsdevtools/coverage-istanbul-loader',
        options: { esModules: true },
        enforce: 'post',
        include: [
          path.join(__dirname, 'apps/frontend-angular'),
          path.join(__dirname, 'libs/'),
        ],
        exclude: [/\.(cy|spec)\.ts$/, /node_modules/],
      },
    ],
  },
};
