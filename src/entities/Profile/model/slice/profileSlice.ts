import { createSlice } from '@reduxjs/toolkit'

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.data = action.payload
                state.isLoading = false
            })
            .addCase(fetchProfileData.pending, (state, action) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string
            })
    },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
