import { type ChangeEvent, type FC, useEffect, useRef, useState } from 'react'
import cn from 'shared/lib/classnames'

import s from './Input.module.scss'
import { type IInputProps } from './InputType'

export const Input: FC<IInputProps> = (props) => {
    const { className, onChange, theme, value, initialValue, focus, ...otherProps } =
        props

    const [input, setInput] = useState(value)

    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!onChange) {
            return
        }

        const inputValue = e?.target?.value
        onChange(inputValue)
        setInput(inputValue)
    }

    // Фокусировка на инпуте при монтировании
    const onFocus = () => {
        inputRef.current?.focus()
    }

    useEffect(() => {
        if (!focus) return
        onFocus()
    }, [focus])

    return (
        <div className={cn(s.Input, s[theme ?? ''], className)}>
            <input
                value={input}
                ref={inputRef}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    )
}
