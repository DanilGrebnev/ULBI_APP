import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'

import { type IUser, type IUserSchema } from '../types/user'

const initialState: IUserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData(state, action: PayloadAction<IUser>) {
            state.authData = action.payload
        },
        /**
         * Достаёт пользователя из
         * локального хранилища и устанавливает
         */
        initAuthData(state) {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)

            if (user) {
                state.authData = JSON.parse(user)
            }
        },

        logout(state) {
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
            delete state?.authData
        },
    },
})

export const { actions: userActions, reducer: userReducer } = userSlice
