import { useState } from 'react'
import s from './s.module.scss'

export const Counter = () => {
    const [state, setStaet] = useState(0)

    const increment = () => {
        setStaet((prev) => (prev += 1))
    }

    const decrement = () => {
        setStaet((prev) => (prev -= 1))
    }

    return (
        <div className={s.counter}>
            <button onClick={increment}>increment</button>
            <h1>{state}</h1>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
