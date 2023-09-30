import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {},
})

export const createReduxStore = () => {
    return store
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
