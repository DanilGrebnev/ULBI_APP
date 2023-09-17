import { fireEvent, render, screen } from '@testing-library/react'

import { SideBar } from './SideBar'

describe('SideBar testing', () => {
    test('Show display', () => {
        render(<SideBar />)
        const element = screen.getByTestId('sidebar')
        expect(element).toBeInTheDocument()
        // screen.debug()
    })

    test('Tets collapsed Sidebar', () => {
        render(<SideBar />)
        const sideBar = screen.getByTestId('sidebar')
        const toggleButton = screen.getByTestId('sidebar-toggle')

        expect(sideBar).toBeInTheDocument()

        fireEvent.click(toggleButton)

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        // screen.debug()
    })
})
