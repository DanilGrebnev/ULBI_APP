import {
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type IProfileSchema } from 'entities/Profile'
import { type IUserSchema } from 'entities/User'
import { type ILoginSchema } from 'features/AuthByUsername'

export interface IStateSchema {
    user: IUserSchema

    // Асинхронные редюсеры
    loginForm?: ILoginSchema
    profile?: IProfileSchema
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager
}

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>
    reduce: (
        state: IStateSchema,
        action: AnyAction,
    ) => CombinedState<IStateSchema>
    add: (key: TStateSchemaKey, reducer: Reducer) => void
    remove: (key: TStateSchemaKey) => void
}

export type TStateSchemaKey = keyof IStateSchema
