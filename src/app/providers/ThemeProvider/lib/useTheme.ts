import { useCallback, useContext } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
    theme: Theme | undefined
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { setTheme, theme } = useContext(ThemeContext)

    const toggleTheme = useCallback(() => {
        if (!setTheme) return

        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

        setTheme(newTheme)

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }, [theme])

    return { theme, toggleTheme }
}
