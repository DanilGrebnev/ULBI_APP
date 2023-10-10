import {
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type IProfileSchema } from 'entities/Profile'
import { type IUserSchema } from 'entities/User'
import { type ILoginSchema } from 'features/AuthByUsername'
import { type NavigateOptions, type To } from 'react-router-dom'

import { type AppDispatch } from './storeConfig'

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
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
    add: (key: TStateSchemaKey, reducer: Reducer) => void
    remove: (key: TStateSchemaKey) => void
}

/** Конфиг для extra thunk */
export interface IThunkExtraConfig {
    api: AxiosInstance
    navigate: (to: To, options?: NavigateOptions) => void
}

/** Конфиг для ThunkApi */
export interface IThunkApiConfig {
    extra: IThunkExtraConfig
}

export type TStateSchemaKey = keyof IStateSchema
