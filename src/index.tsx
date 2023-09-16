import 'shared/config/i18n/i18n'

import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'

const root = document.getElementById('root')

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    root
)
