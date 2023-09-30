import React, { type FC } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'

import { LoginForm } from '../LoginForm/LoginForm'

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
            <LoginForm />
        </Modal>
    )
}
