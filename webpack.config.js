const path = require('path');
const fs = require('fs');

// let babelConf;
// if (fs.existsSync('./.babelrc')) {
//   // use babel
//   babelConf = JSON.parse(fs.readFileSync('.babelrc'));
// }

module.exports = function(env = {}) {
  let babelConf;
  const babelRC = env.esnext ? './.es6.babelrc' : './.babelrc';

  if (fs.existsSync(babelRC)) {
    babelConf = JSON.parse(fs.readFileSync(babelRC));
    babelConf.babelrc = false;
  }

  const externals = {};
  let filename = 'sprite-extend-shapes.standalone.js';
  if (!env.standalone) {
    externals['sprite-core'] = 'spritejs';
    filename = env.esnext
      ? 'sprite-extend-shapes.es6.js'
      : 'sprite-extend-shapes.js';
  }

  return {
    mode: env.production ? 'production' : 'none',
    entry: './src/index',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename,
      publicPath: '/js/',
      library: ['spriteShapes'],
      libraryExport: 'default',
      libraryTarget: 'umd'
    },
    // resolve: {
    //   aliasFields: ['wxapp'],
    // },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: babelConf
          }
        }
      ]

      /* Advanced module configuration (click to show) */
    },

    externals,
    // Don't follow/bundle these modules, but request them at runtime from the environment

    stats: 'errors-only',
    // lets you precisely control what bundle information gets displayed

    devServer: {
      contentBase: path.join(__dirname, 'example'),
      compress: true,
      port: 9090
      // ...
    },

    plugins: [
      // ...
    ]
    // list of additional plugins

    /* Advanced configuration (click to show) */
  };
};
