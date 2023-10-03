import { memo } from 'react'
import cn from 'shared/lib/classnames'

import { type ButtonProps, ButtonSize, ThemeButton } from '../types'
import s from './Button.module.scss'

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        size = ButtonSize.L,
        theme = ThemeButton.CLEAR,
        isLoading = false,
        disabled = false,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            title="button"
            className={cn(
                s.button,
                s[theme],
                s[size],
                { [s.disabled]: disabled },
                className,
            )}
            disabled={disabled}
            {...otherProps}
        >
            {isLoading ? 'загрузка...' : children}
        </button>
    )
})

Button.displayName = 'Button'
