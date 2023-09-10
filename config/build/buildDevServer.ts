import { type BuildOptions } from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export const buildDevSever = (
    options: BuildOptions
): DevServerConfiguration => {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}
