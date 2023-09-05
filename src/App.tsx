import { Routes, Route, Link } from 'react-router-dom'
import { Suspense, useContext } from 'react'
import { MainPageAsync } from './Pages/MainPage/MainPage.async'
import { AboutPageAsync } from './Pages/AboutPage/AboutPage.async'
import { useTheme } from './theme/useTheme'
import cn from 'classnames'

import './styles/index.scss'

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={cn('app', theme)}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}
