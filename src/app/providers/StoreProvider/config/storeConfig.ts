import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'

import { type IStateSchema } from './IStateSchema'

const rootReducers: ReducersMapObject<IStateSchema> = {
    user: userReducer,
}

const store = configureStore<IStateSchema>({
    reducer: rootReducers,
})

export const createReduxStore = () => {
    return store
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
