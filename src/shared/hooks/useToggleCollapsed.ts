import { useCallback, useState } from 'react'

type TUseToggleCollapsed = (initialState: boolean) => [boolean, () => void]

export const useToggleCollapsed: TUseToggleCollapsed = (
    initialState = false,
) => {
    const [collapsed, setCollapsed] = useState(initialState)

    const toggleCollapsed = useCallback((): void => {
        setCollapsed((currentState) => !currentState)
    }, [])

    return [collapsed, toggleCollapsed]
}
