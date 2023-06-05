const { merge } = require('webpack-merge')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

const commonConfig = {
  // 👇 Don't forget to add the new entry point to the array of "splitChunks" chunks
  entry: {
    popup: path.resolve('src/popup/index.tsx'),
    options: path.resolve('src/options/index.tsx'),
    background: path.resolve('src/background/background.ts'),
    contentScript: path.resolve('src/contentScript/contentScript.tsx')
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [tailwindcss, autoprefixer]
              }
            }
          }
        ]
      },
      {
        type: 'asset/resource',
        test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/static'),
          to: path.resolve('dist')
        }
      ]
    }),
    ...getHtmlPlugins(['popup', 'options'])
  ],
  resolve: {
    extensions: ['.tsx', '.js', '.ts']
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return !['contentScript', 'background', 'options'].includes(chunk.name)
      }
    }
  }
}

const developmentConfig = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist')
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve('src/static'), to: path.resolve('dist') }],
      options: {}
    })
  ]
}

const productionConfig = {
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devtool: false,
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist-prod')
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve('src/static'), to: path.resolve('dist-prod') }],
      options: {}
    })
  ]
}

function getHtmlPlugins(chunks) {
  return chunks.map(
    chunk =>
      new HtmlPlugin({
        title: 'AI assistant for Linkedin',
        filename: `${chunk}.html`,
        chunks: [chunk]
      })
  )
}

module.exports = (_env, argv) => {
  if (argv.mode === 'production') {
    return merge(commonConfig, productionConfig)
  }
  if (argv.mode === 'development') {
    return merge(commonConfig, developmentConfig)
  }
}
