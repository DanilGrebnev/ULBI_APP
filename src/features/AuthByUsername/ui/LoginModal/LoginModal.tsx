import { type FC, Suspense } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'

import { LoginFormAsync } from '../LoginForm/LoginFormAsync'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
    lazy?: boolean
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { isOpen, onClose, lazy } = props

    return (
        <Modal
            lazy={lazy}
            isOpen={isOpen}
            onClose={onClose}
        >
            <Suspense fallback="loading">
                <LoginFormAsync />
            </Suspense>
        </Modal>
    )
}
