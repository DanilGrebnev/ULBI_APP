import { type CSSProperties, type FC } from 'react'
import cl from 'shared/lib/classnames'
import { Loader } from 'shared/ui/Loader'

import s from './Preloader.module.scss'

interface PreloaderProps {
    className?: string
    style?: CSSProperties
}

export const Preloader: FC<PreloaderProps> = (props) => {
    const { className, style } = props

    return (
        <div
            style={style}
            className={cl('PreloadBlock', className, s.Preloader)}
        >
            <Loader />
        </div>
    )
}
