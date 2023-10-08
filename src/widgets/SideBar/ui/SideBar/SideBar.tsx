import { memo } from 'react'
import { useToggleCollapsed } from 'shared/hooks/useToggleCollapsed'
import cn from 'shared/lib/classnames'
import { Button, ThemeButton } from 'shared/ui/Button'
import { ButtonSize } from 'shared/ui/Button/types'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

import s from './SideBar.module.scss'
import { SideBarItemList } from './SideBarItemList/SideBarItemList'

export const SideBar = memo(() => {
    const [collapsed, toggleCollapsed] = useToggleCollapsed(false)

    const collapsedClass = cn({ [s.collapsed]: collapsed })

    return (
        <div
            data-testid="sidebar"
            className={cn(s.SideBar, collapsedClass)}
        >
            <div className={s.linksContainer}>
                <SideBarItemList collapsed={collapsed} />
            </div>
            <Button
                onClick={toggleCollapsed}
                theme={ThemeButton.SQUARE}
                size={ButtonSize.M}
                className={s.collapseButton}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cn(s.switcherContainer, collapsedClass)}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
})

SideBar.displayName = 'SideBar'
