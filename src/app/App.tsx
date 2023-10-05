import { AppRouter } from 'app/providers/router'
import { userActions } from 'entities/User'
import { type FC, Suspense, useEffect } from 'react'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import cn from 'shared/lib/classnames'
import { changeThemeOnBody } from 'shared/lib/toggleThemeOnBody'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'

import { useTheme } from './providers/ThemeProvider'

export const App: FC = () => {
    const { theme } = useTheme()
    const dispatch = useAppDispatch()

    useEffect(() => {
        changeThemeOnBody(theme)
    }, [theme])

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

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
