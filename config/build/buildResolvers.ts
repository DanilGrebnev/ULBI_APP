import { ResolveOptions } from 'webpack'

export const buildResolvers = (): ResolveOptions => {
    return {
        // Указываем расширения файлов, для которых мы
        // при импорте не будем указывать расширение
        // exemple: import Componen from "./component"
        extensions: ['.tsx', '.ts', '.js'],
    }
}
