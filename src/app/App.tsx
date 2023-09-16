import './styles/index.scss'

import { AppRouter } from 'app/providers/router'
import { type FC, Suspense } from 'react'
import cn from 'shared/lib/classnames'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'

import { useTheme } from './providers/ThemeProvider'

export const App: FC = () => {
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
