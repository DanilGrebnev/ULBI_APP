import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

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

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        )
    }

    return plugins
}
