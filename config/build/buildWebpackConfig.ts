import type webpack from 'webpack'

import { type BuildOptions } from './types/config'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevSever } from './buildDevServer'

export const buildWebpackConfig = (
    options: BuildOptions
): webpack.Configuration => {
    const { mode, paths, isDev } = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },

        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(options),
        },

        devServer: isDev ? buildDevSever(options) : undefined,

        resolve: buildResolvers(options),

        devtool: isDev ? 'inline-source-map' : undefined,
    }
}
