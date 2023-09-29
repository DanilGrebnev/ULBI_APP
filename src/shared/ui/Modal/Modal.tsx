import {
    type FC,
    type MouseEvent,
    type ReactNode,
    useCallback,
    useEffect,
} from 'react'
import cn from 'shared/lib/classnames'
import { Portal } from 'shared/ui/Portal/Portal'

import s from './Modal.module.scss'

interface ModalProps {
    childre?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
    const { children, isOpen = false, onClose } = props

    /**
     * Предотвращает закрытие модального окна при клике
     * на область контента
     */
    const contentClick = (e: MouseEvent): void => {
        e.stopPropagation()
    }

    const closeModal = useCallback((): void => {
        if (onClose) {
            onClose()
        }
    }, [onClose])

    const onKeyDown = useCallback(
        (e: globalThis.KeyboardEvent): any => {
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
