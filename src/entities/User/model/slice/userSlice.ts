import { createSlice } from '@reduxjs/toolkit'

import { type IUserSchema } from '../types/user'

const initialState: IUserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        incerement() {},
    },
})

export const { actions: userActions, reducer: userReducer } = userSlice
