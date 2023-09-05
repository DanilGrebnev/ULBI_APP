import { useCallback, useContext } from 'react'
import {
    Theme,
    ThemeContext,
    LOCAL_STORAGE_THEME_KEY,
    ThemeContextProps,
} from './ThemeContext'

interface UseThemeResult {
    theme: Theme | undefined
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { setTheme, theme } = useContext(ThemeContext)

    const toggleTheme = useCallback(() => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

        if (!setTheme) return

        setTheme(newTheme)

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }, [theme])

    return { theme, toggleTheme }
}
