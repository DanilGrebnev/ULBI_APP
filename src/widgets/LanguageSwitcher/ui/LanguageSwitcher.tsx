import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'shared/lib/classnames'
import { Button, ThemeButton } from 'shared/ui/Button'

import s from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = memo((props: LanguageSwitcherProps) => {
    const { className } = props

    const { t, i18n } = useTranslation()

    const toggleLanguage = (): void => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={cn(s.LanguageSwitcher, className)}
            onClick={toggleLanguage}
        >
            {t('Язык')}
        </Button>
    )
})

LanguageSwitcher.displayName = 'LanguageSwitcher'
