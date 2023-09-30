import {
    type FC,
    type MouseEvent,
    type ReactNode,
    useCallback,
    useEffect,
    useState,
} from 'react'
import cn from 'shared/lib/classnames'
import { Portal } from 'shared/ui/Portal/Portal'

import s from './Modal.module.scss'

interface ModalProps {
    childre?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export const Modal: FC<ModalProps> = (props) => {
    const { children, isOpen = false, onClose, lazy } = props
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen])

    // Предотвращает закрытие модального окна при клике
    // на область контента
    const contentClick = (e: MouseEvent): void => {
        e.stopPropagation()
    }

    const closeModal = useCallback((): void => {
        if (onClose) {
            onClose()
        }
    }, [onClose])

    // Закрытие модального окна на клавишу "Escape"
    const onKeyDown = useCallback(
        (e: globalThis.KeyboardEvent): void => {
            if (e.key === 'Escape') {
                closeModal()
            }
        },
        [closeModal],
    )

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown)

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    // Если передан проп "Lazy"
    // И модальное окно ни разу не открывалось
    // Тогда модальное окно не будет монитроваться в DOM
    if (lazy && !isMounted) {
        return null
    }

    return (
        <Portal>
            <div
                onClick={closeModal}
                className={cn(s.Modal, { [s.opened]: isOpen })}
            >
                <div className={s.overlay}>
                    <div
                        onClick={contentClick}
                        className={s.content}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
