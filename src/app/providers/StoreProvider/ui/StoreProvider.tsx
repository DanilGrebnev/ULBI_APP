import { createReduxStore } from 'app/providers/StoreProvider/config/storeConfig'
import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { type StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
    children: ReactNode
    initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children } = props

    const store = createReduxStore()

    return <Provider store={store}>{children}</Provider>
}
