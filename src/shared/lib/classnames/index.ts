type ClassNamesProps = string | Record<string, boolean> | undefined

export default (...args: ClassNamesProps[]): string => {
    return args
        .reduce<string[]>((classNames, classNameObject) => {
            if (typeof classNameObject === 'string') {
                classNames.push(classNameObject.trim())
            }

            if (typeof classNameObject === 'object') {
                Object.entries(classNameObject).forEach(
                    ([className, isTrue]) => {
                        if (isTrue) {
                            classNames.push(className.trim())
                        }
                    }
                )
            }

            return classNames
        }, [])
        .join(' ')
}
