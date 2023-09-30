import 'shared/config/i18n/i18n'
import './app/styles/index.scss'

import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App } from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'
const container = document.getElementById('root') as HTMLElement

const Application = (
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)

createRoot(container).render(Application)
