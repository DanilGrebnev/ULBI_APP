import { type FC } from 'react'
import s from './LanguageSwitcher.module.scss'
import cn from 'shared/lib/classnames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { ThemeButton } from 'shared/ui/Button/ui/Button'

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
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
}
