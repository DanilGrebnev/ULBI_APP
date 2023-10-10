import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { type NavigateOptions, type To } from 'react-router-dom'
import { $api as api } from 'shared/api/api'

import { type IStateSchema } from './IStateSchema'
import { createReducerManager } from './reducerManager'

interface ICreateReduxStore {
    navigate?: (to: To, options?: NavigateOptions) => void
}

const rootReducers: ReducersMapObject<IStateSchema> = {
    user: userReducer,
}

export const createReduxStore = (props: ICreateReduxStore) => {
    const { navigate } = props
    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore({
        // @ts-ignore
        reducer: reducerManager.reduce,
        // @ts-ignore
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api,
                        navigate,
                    },
                },
            }),
    })
    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export type thunkApi = ReturnType<typeof createReduxStore>
