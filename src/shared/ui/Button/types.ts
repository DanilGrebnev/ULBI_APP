import { type ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    size?: ButtonSize
}

export enum ThemeButton {
    CLEAR = 'clear',
    SQUARE = 'square',
}

export enum ButtonSize {
    L = 'l',
    M = 'm',
    S = 's',
}
