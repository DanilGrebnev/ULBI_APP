import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const config: webpack.Configuration = {
  mode: 'development',
  //Стартовая точка приложения
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  //Куда делается сборка приложения
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    //Указываем, чтобы output папка очищалась от прдедыдущей сборки
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin(),
  ],

  module: {
    rules: [
      /* 
        Лоадеры отвечают за обработку файлов, которые 
        выходят за рамки js: .png, svg, ts, scss, css и т.д.
      */
      {
        /*
         По регулярке происходит поиск файлов, которые 
         будет обрабтывать лоадер из поля use
        */
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // Указываем расширения файлов, для которых мы
    // при импорте не будем указывать расширение
    // exemple: import Componen from "./component"
    extensions: ['.tsx', '.ts', '.js'],
  },
}

export default config
