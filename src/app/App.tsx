import { Suspense } from 'react'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'
import cn from 'shared/lib/classnames'

import './styles/index.scss'
import { SideBar } from 'widgets/SideBar'

export const App = (): JSX.Element => {
    const { theme } = useTheme()

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
