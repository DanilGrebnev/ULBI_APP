import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { useToggleCollapsed } from 'shared/hooks/useToggleCollapsed'
import cn from 'shared/lib/classnames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { Button, ThemeButton } from 'shared/ui/Button'
import { ButtonSize } from 'shared/ui/Button/types'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

import s from './SideBar.module.scss'

interface SideBarProps {
    className?: string
}

export const SideBar: FC<SideBarProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()
    const [collapsed, toggleCollapsed] = useToggleCollapsed(false)

    return (
        <div
            data-testid="sidebar"
            className={cn(s.SideBar, className, { [s.collapsed]: collapsed })}
        >
            <div className={s.links}>
                <AppLink
                    to={RoutePath.MAIN}
                    className={s.linkItem}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <MainIcon className={s.icon} />
                    <span className={s.linkItemText}>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    to={RoutePath.ABOUT}
                    className={s.linkItem}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <AboutIcon className={s.icon} />
                    <span className={s.linkItemText}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <Button
                onClick={toggleCollapsed}
                theme={ThemeButton.SQUARE}
                size={ButtonSize.M}
                className={s.collapseButton}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div
                className={cn(s.switcherWrapper, { [s.collapsed]: collapsed })}
            >
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
}
