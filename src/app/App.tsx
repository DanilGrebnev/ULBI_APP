import { AppRouter } from 'app/providers/router'
import { type FC, Suspense, useEffect } from 'react'
import cn from 'shared/lib/classnames'
import { changeThemeOnBody } from 'shared/lib/toggleThemeOnBody'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'

import { useTheme } from './providers/ThemeProvider'

export const App: FC = () => {
    const { theme } = useTheme()

    useEffect(() => {
        changeThemeOnBody(theme)
    }, [theme])

    return (
        <Suspense fallback="loading">
            <div className={cn('app', theme)}>
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    )
}
