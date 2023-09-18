import { type FC, useState } from 'react'
import cn from 'shared/lib/classnames'
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

    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = (): void => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={cn(s.SideBar, className, { [s.collapsed]: collapsed })}
        >
            <Button
                onClick={toggleCollapsed}
                theme={ThemeButton.SQUARE}
                size={ButtonSize.M}
                className={s.collapseButton}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cn(s.switcherWrapper, { [s.collapsed]: collapsed })}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
}
