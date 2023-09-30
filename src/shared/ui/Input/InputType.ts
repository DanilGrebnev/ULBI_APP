import { type InputHTMLAttributes } from 'react'

type TInputHTMLProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>

export interface IInputProps extends TInputHTMLProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    focus?: boolean
}
