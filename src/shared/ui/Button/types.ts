import { type ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    size?: ButtonSize
    isLoading?: boolean
}

export enum ThemeButton {
    CLEAR = 'clear',
    SQUARE = 'square',
    BORDER = 'border',
}

export enum ButtonSize {
    L = 'l',
    M = 'm',
    S = 's',
}
