import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'

import s from './LoginForm.module.scss'

export const LoginForm = () => {
    const { t } = useTranslation()

    return (
        <div className={s.LoginForm}>
            <Input
                focus
                type="text"
                name="username"
            />
            <Input
                type="text"
                name="password"
            />
            <Button
                type="submit"
                className={s.button}
            >
                {t('Войти')}
            </Button>
        </div>
    )
}
