import { type ChangeEvent, type FC, useEffect, useRef } from 'react'
import cn from 'shared/lib/classnames'

import s from './Input.module.scss'
import { type IInputProps } from './InputType'

export const Input: FC<IInputProps> = (props) => {
    const { className, onChange, value, focus, ...otherProps } = props

    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e?.target?.value)
        }
    }

    // Фокусировка на инпуте при монтировании
    const onFocus = () => {
        inputRef.current?.focus()
    }

    useEffect(() => {
        if (focus) {
            onFocus()
        }
    }, [focus])

    return (
        <div className={cn(s.Input, className)}>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    )
}
