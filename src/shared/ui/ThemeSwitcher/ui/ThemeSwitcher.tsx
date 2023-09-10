import { FC } from 'react'
import s from './ThemeSwitcher.module.scss'
import { Button } from 'shared/ui/Button'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'

import cn from 'shared/lib/classnames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { ThemeButton } from 'shared/ui/Button/ui/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { theme, toggleTheme } = useTheme()

    const { children = 'switch theme', className } = props

    return (
        <Button
            theme={ThemeButton.CLEAR}
            type='button'
            onClick={toggleTheme}
            className={cn(s.themeSwitcher, className)}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    )
}
