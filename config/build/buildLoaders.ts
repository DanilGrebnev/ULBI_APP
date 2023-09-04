import webpack from 'webpack'

export function buildLoaders(): webpack.RuleSetRule[] {
  const tsLoader =
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
    }

  const loadersArray = [tsLoader]

  return loadersArray
}
