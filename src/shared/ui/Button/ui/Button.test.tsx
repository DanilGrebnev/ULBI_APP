import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import { ThemeButton } from '../types'
import { Button } from './Button'

describe('Button', () => {
    test('Test 1', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        // screen.debug()
    })
})
