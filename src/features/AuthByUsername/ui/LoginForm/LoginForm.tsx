import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Button, ThemeButton } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'

import {
    getLoginErrorState,
    getLoginIsLoadingState,
    getLoginPasswordState,
    getLoginUserNameState,
} from '../../model/selectors'
import { loginActions } from '../../model/slice/index'
import s from './LoginForm.module.scss'

export const LoginForm = memo(() => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const username = useAppSelector(getLoginUserNameState)
    const password = useAppSelector(getLoginPasswordState)
    const isLoading = useAppSelector(getLoginIsLoadingState)
    const error = useAppSelector(getLoginErrorState)

    const onChangeUsername = useCallback(
        (string: string) => {
            dispatch(loginActions.setUserName(string))
        },
        [dispatch],
    )

    const onChangePassword = useCallback(
        (string: string) => {
            dispatch(loginActions.setPassword(string))
        },
        [dispatch],
    )

    const onLoginClick = useCallback(
        (e) => {
            e.preventDefault()
            dispatch(loginByUserName({ username, password }))
        },
        [username, password, dispatch],
    )

    return (
        <div className={s.LoginForm}>
            <Input
                focus
                type="text"
                name="username"
                value={username}
                onChange={onChangeUsername}
            />
            <Input
                type="text"
                name="password"
                value={password}
                onChange={onChangePassword}
            />
            <Button
                isLoading={isLoading}
                disabled={isLoading}
                theme={ThemeButton.BORDER}
                type="submit"
                className={s.button}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </div>
    )
})

LoginForm.displayName = 'LoginForm'
