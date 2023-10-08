import { LoginModal } from 'features/AuthByUsername'
import { type CSSProperties, type FC, useCallback, useState } from 'react'
import cn from 'shared/lib/classnames'

import { DynamicButton } from './DynamicButton/DynamicButton'
import s from './Navbar.module.scss'

interface INavBarProps {
    className?: string
    style?: CSSProperties
}

export const NavBar: FC<INavBarProps> = (props) => {
    const { className, style } = props

    const [isOpen, setIsOpen] = useState(false)

    const onOpenModal = useCallback(() => {
        setIsOpen(true)
    }, [])

    const onCloseModal = useCallback(() => {
        setIsOpen(false)
    }, [])

    return (
        <div
            style={style}
            className={cn(s.Navbar, className)}
        >
            <DynamicButton onOpenModal={onOpenModal} />
            <LoginModal
                lazy
                isOpen={isOpen}
                onClose={onCloseModal}
            />
        </div>
    )
}
