import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

import { SideBar } from './SideBar'

describe('SideBar testing', () => {
    test('Show in display', () => {
        render(<SideBar />)
        const element = screen.getByTestId('sidebar')
        expect(element).toBeInTheDocument()
        // screen.debug()
    })

    test('Test on collapsed', () => {
        render(<SideBar />)
        const sideBar = screen.getByTestId('sidebar')
        const toggleButton = screen.getByTestId('sidebar-toggle')

        expect(sideBar).toBeInTheDocument()

        fireEvent.click(toggleButton)

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        // screen.debug()
    })

    test('Test toggle theme', () => {
        const { container } = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
        )
        const btn = container.getElementsByClassName('theme-switcher')[0]

        expect(btn).toBeInTheDocument()
        fireEvent.click(btn)
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>,
        )
        screen.debug()
    })
})
