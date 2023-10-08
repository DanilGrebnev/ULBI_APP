import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUserName'
import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import {
    DynamicModuleLoader,
    type TReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { Button, ThemeButton } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text'

import {
    getLoginErrorState,
    getLoginIsLoadingState,
    getLoginPasswordState,
    getLoginUserNameState,
} from '../../model/selectors'
import { loginActions, loginReducer } from '../../model/slice/index'
import s from './LoginForm.module.scss'

const initialReducers: TReducersList = {
    loginForm: loginReducer,
}

interface ILoginFormProps {
    onSuccess?: () => void
}

const LoginForm = memo((props: ILoginFormProps) => {
    const { onSuccess } = props
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
        async (e) => {
            e.preventDefault()
            const result = await dispatch(
                loginByUserName({ username, password }),
            )

            // Закрываем модальное окно при успешной авторизации
            if (result.meta.requestStatus === 'fulfilled') {
                if (!onSuccess) return
                onSuccess()
            }
        },
        [onSuccess, username, password, dispatch],
    )

    const resetError = () => {
        setTimeout(() => {
            dispatch(loginActions.resetError())
        }, 3000)
    }

    useEffect(() => {
        if (!error) return
        resetError()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error])

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducerName="loginForm"
            reducers={initialReducers}
        >
            <div className={s.LoginForm}>
                <Text title={t('Форма авторизации')} />
                {error && (
                    <Text
                        text={error}
                        theme={TextTheme.ERROR}
                    />
                )}
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
                    type="submit"
                    isLoading={isLoading}
                    disabled={isLoading}
                    theme={ThemeButton.BORDER}
                    className={s.button}
                    onClick={onLoginClick}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
})

LoginForm.displayName = 'LoginForm'

export default LoginForm
