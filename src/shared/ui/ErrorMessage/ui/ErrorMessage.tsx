import { type FC } from 'react'
import { Text, TextTheme } from 'shared/ui/Text'

import s from './ErrorMessage.module.scss'

interface IErrorMessageProps {
    className?: string
    error?: string
}

export const ErrorMessage: FC<IErrorMessageProps> = (props) => {
    const { error } = props

    return (
        <div className={s.ErrorMessage}>
            <Text
                theme={TextTheme.ERROR}
                text={error}
            />
        </div>
    )
}

ErrorMessage.displayName = 'ErrorMessage'
