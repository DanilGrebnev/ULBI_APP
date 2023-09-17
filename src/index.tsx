import 'shared/config/i18n/i18n'

import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'

const container = document.getElementById('root') as HTMLElement

const Application = (
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)

createRoot(container).render(Application)
