import { type FC, useState } from 'react'
import s from './SideBar.module.scss'
import cn from 'shared/lib/classnames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

interface SideBarProps {
    className?: string
}

export const SideBar: FC<SideBarProps> = (props) => {
    const { className } = props

    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = (): void => {
        setCollapsed((pre) => !pre)
    }

    return (
        <div className={cn(s.SideBar, className, { [s.collapsed]: collapsed })}>
            <button
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
