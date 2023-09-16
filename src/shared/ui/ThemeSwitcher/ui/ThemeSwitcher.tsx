import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { type FC } from 'react'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import cn from 'shared/lib/classnames'
import { Button } from 'shared/ui/Button'
import { ThemeButton } from 'shared/ui/Button/ui/Button'

import s from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { theme, toggleTheme } = useTheme()

    const { className } = props

    return (
        <Button
            theme={ThemeButton.CLEAR}
            type="button"
            onClick={toggleTheme}
            className={cn(s.themeSwitcher, className)}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
