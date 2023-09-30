import { createReduxStore } from 'app/providers/StoreProvider/config/storeConfig'
import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { type IStateSchema } from '../config/IStateSchema'

interface StoreProviderProps {
    children: ReactNode
    initialState?: IStateSchema
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children } = props

    const store = createReduxStore()

    return <Provider store={store}>{children}</Provider>
}
