import { type FC } from 'react'
import cn from 'shared/lib/classnames'

import { type ButtonProps, ButtonSize, ThemeButton } from '../types'
import s from './Button.module.scss'

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        size = ButtonSize.L,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            title="button"
            className={cn(s.button, s[theme], s[size], className)}
            {...otherProps}
        >
            {children}
        </button>
    )
}
