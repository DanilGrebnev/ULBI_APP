import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'

import { type IStateSchema } from './IStateSchema'
import { createReducerManager } from './reducerManager'

const rootReducers: ReducersMapObject<IStateSchema> = {
    user: userReducer,
}

const reducerManager = createReducerManager(rootReducers)

export const store = configureStore<IStateSchema>({
    // @ts-ignore
    reducer: reducerManager.reduce,
})
// @ts-ignore
store.reducerManager = reducerManager

export const createReduxStore = () => {
    return store
}

export type RootState = ReturnType<typeof store.getState>
