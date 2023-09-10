import { ButtonHTMLAttributes, FC } from 'react'
import cn from 'shared/lib/classnames'
import s from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props

    return (
        <button
            type='button'
            title='button'
            className={cn(s.button, s[theme], className)}
            {...otherProps}
        >
            {children}
        </button>
    )
}
