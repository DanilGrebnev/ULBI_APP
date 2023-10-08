import { createSlice } from '@reduxjs/toolkit'

import { type IProfileSchema } from '../types/profile'

const initialState: IProfileSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
