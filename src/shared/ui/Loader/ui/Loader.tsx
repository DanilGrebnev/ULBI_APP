import { Waveform } from '@uiball/loaders'
import { type FC } from 'react'

import s from './Loader.module.scss'

interface LoaderProps {
    className?: string
    size?: number
    speed?: number
    color?: string
    lineWeight?: number
}

export const Loader: FC<LoaderProps> = (props) => {
    const { className, size = 40, lineWeight = 3.5, color = 'black', speed = 1 } = props

    return (
        <div className={s.loader}>
            <Waveform
                size={size}
                lineWeight={lineWeight}
                speed={speed}
                color={color}
                className={className}
            />
        </div>
    )
}
