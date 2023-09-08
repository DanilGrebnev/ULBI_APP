import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'
import cn from 'shared/lib/classnames'

import './styles/index.scss'

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={cn('app', theme)}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <NavBar />
            <AppRouter />
        </div>
    )
}
