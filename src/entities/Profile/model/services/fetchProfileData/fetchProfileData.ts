import { createAsyncThunk } from '@reduxjs/toolkit'
import { type GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { type IThunkApiConfig } from 'app/providers/StoreProvider/config/IStateSchema'
import { type AxiosError } from 'axios'

import { type IProfile } from '../../types/profile'

interface IRejectResponse {
    message: string
}

export const fetchProfileData = createAsyncThunk<IProfile>(
    'profile/fetchData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi as GetThunkAPI<
            IThunkApiConfig<string | undefined>
        >

        try {
            const response = await extra.api.get<IProfile>('/profile')

            if (response.status >= 400) {
                throw new Error()
            }

            return response.data
        } catch (err) {
            const error = err as AxiosError<IRejectResponse>
            return rejectWithValue(error.response?.data.message)
        }
    },
)
