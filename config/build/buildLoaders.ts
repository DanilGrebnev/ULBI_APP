import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    // Лоадер для работы с scss
    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) =>
                            !!resPath.includes('.module.'),

                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    }

    // Если не используем тайпскрипт - нужен babel-loader
    const tsLoader =
        // Лоадеры отвечают за обработку файлов, которые
        // выходят за рамки js: .png, svg, ts, scss, css и т.д.
        {
            // По регулярке происходит поиск файлов, которые
            // будет обрабтывать лоадер из поля use
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    const loadersArray = [tsLoader, scssLoader]

    return loadersArray
}
