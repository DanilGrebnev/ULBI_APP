import { type FC } from 'react'
import cn from 'shared/lib/classnames'

import { type ButtonProps, ThemeButton } from '../types'
import s from './Button.module.scss'

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            title="button"
            className={cn(s.button, s[theme], className)}
            {...otherProps}
        >
            {children}
        </button>
    )
}
