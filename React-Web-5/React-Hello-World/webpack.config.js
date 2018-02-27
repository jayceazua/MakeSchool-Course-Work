module.exports = {
  // the entry is where webpack starts compiling the bundle file
  entry: './public/js/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Greeter: 'public/components/Greeter.jsx',
      GreeterMessage: 'public/components/GreeterMessage.jsx',
      GreeterForm: 'public/components/GreeterForm.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
    }
  ]
  }
}
