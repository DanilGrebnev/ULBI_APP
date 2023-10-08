import { type Reducer } from '@reduxjs/toolkit'
import {
    type IReduxStoreWithManager,
    type TStateSchemaKey,
} from 'app/providers/StoreProvider/config/IStateSchema'
import { type FC, type ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

export type TReducersList = { [key in TStateSchemaKey]?: Reducer }

interface IDynamicModuleLoaderProps {
    reducerName: TStateSchemaKey
    children?: ReactNode
    reducers: TReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = (props) => {
    const { children, removeAfterUnmount, reducers } = props

    const store = useStore() as IReduxStoreWithManager
    const dispatch = useAppDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([reducerName, reducer]: [string, Reducer]) => {
                store.reducerManager.add(
                    reducerName as TStateSchemaKey,
                    reducer,
                )

                dispatch({ type: `@INIT: ${reducerName}reducer` })
            },
        )

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerName]: any) => {
                    store.reducerManager.remove(reducerName)
                    dispatch({ type: `@DESTROY: ${reducerName}reducer` })
                })
            }
        }
        // eslint-disable-next-line
    }, [])

    return <>{children}</>
}
