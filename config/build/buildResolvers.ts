import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
    return {
        // Указываем расширения файлов, для которых мы
        // при импорте не будем указывать расширение
        // exemple: import Componen from "./component"
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {},
        mainFiles: ['index'],
    }
}
