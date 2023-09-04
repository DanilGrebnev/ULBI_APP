import webpack from 'webpack'

import { BuildOptions } from './types/config'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'

export const buildWebpackConfig = (
    options: BuildOptions
): webpack.Configuration => {
    const { mode, paths } = options

    return {
        mode,
        //Стартовая точка приложения
        entry: paths.entry,
        //Куда делается сборка приложения
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            //Указываем, чтобы output папка очищалась от прдедыдущей сборки
            clean: true,
        },

        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(),
        },

        resolve: buildResolvers(),
    }
}
