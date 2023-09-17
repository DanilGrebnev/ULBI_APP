import { type FC, useState } from 'react'
import cn from 'shared/lib/classnames'
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
            <button
                data-testid="sidebar-toggle"
                onClick={toggleCollapsed}
                type="button"
            >
                Toggle
            </button>
            <div className={s.switcher}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    )
}
