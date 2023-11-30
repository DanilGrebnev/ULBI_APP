import { type FC, type ReactNode } from 'react'
import cn from 'shared/lib/classnames'

import s from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string
    title?: string
    text?: ReactNode
    theme?: TextTheme
    fullWidth?: boolean
    contentWidth?: boolean
}

export const Text: FC<TextProps> = (props) => {
    const {
        title,
        text,
        className,
        fullWidth = true,
        theme = TextTheme.PRIMARY,
        contentWidth = false,
    } = props

    return (
        <div
            className={cn(
                s.Text,
                s[theme],
                { [s.fullWidth]: fullWidth, [s.contentWidth]: contentWidth },
                className,
            )}
        >
            {title && <p className={s.title}>{title}</p>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    )
}
