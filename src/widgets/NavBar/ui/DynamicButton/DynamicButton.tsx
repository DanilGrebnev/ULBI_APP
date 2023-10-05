import { getUserAuthData, userActions } from 'entities/User'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Button, ThemeButton } from 'shared/ui/Button'
interface IDynamicButtonProps {
    className?: string
    onOpenModal?: () => void
}
/**
 * Возвращает одну из двух кнопок,
 * в зависимости от авторизации пользователя
 */
export const DynamicButton = memo((props: IDynamicButtonProps) => {
    const { onOpenModal } = props

    const dispatch = useAppDispatch()
    const isAuthUserData = useAppSelector(getUserAuthData)
    const { t } = useTranslation()

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    return isAuthUserData ? (
        <Button onClick={onLogout}>{t('Выйти')}</Button>
    ) : (
        <Button
            onClick={onOpenModal}
            theme={ThemeButton.CLEAR}
        >
            {t('Войти')}
        </Button>
    )
})

DynamicButton.displayName = 'DynamicButton'
