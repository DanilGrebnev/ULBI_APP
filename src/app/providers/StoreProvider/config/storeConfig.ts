import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'

import { type IStateSchema } from './IStateSchema'

const rootReducers: ReducersMapObject<IStateSchema> = {
    user: userReducer,
    loginForm: loginReducer,
}

export const store = configureStore<IStateSchema>({
    reducer: rootReducers,
})

export const createReduxStore = () => {
    return store
}

export type RootState = ReturnType<typeof store.getState>
