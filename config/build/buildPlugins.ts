import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import ReactRefreshWebpackPlugin from 'react-refresh-webpack-plugin'
import { type BuildOptions } from './types/config'

export const buildPlugins = ({
    isDev,
    paths,
}: BuildOptions): webpack.WebpackPluginInstance[] => {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),

        new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new ReactRefreshWebpackPlugin(),
    ]

    return plugins
}
