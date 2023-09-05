import { useState } from 'react'
import s from './s.module.scss'

export const Counter = () => {
    return (
        <div className={s.counter}>
            <button>increment</button>
            <h1></h1>
            <input value='отправить' type='button' />
        </div>
    )
}
