import { LoginModal } from 'features/AuthByUsername'
import { type CSSProperties, type FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'shared/lib/classnames'
import { Button, ThemeButton } from 'shared/ui/Button'

import s from './Navbar.module.scss'

interface NavBarProps {
    className?: string
    style?: CSSProperties
}

export const NavBar: FC<NavBarProps> = (props) => {
    const { className, style } = props

    const { t } = useTranslation()
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
            <Button
                onClick={onOpenModal}
                theme={ThemeButton.CLEAR}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                lazy
                isOpen={isOpen}
                onClose={onCloseModal}
            />
        </div>
    )
}
