import { createAsyncThunk } from '@reduxjs/toolkit'
import { type GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { type IThunkApiConfig } from 'app/providers/StoreProvider/config/IStateSchema'

import { type IProfile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<IProfile>(
    'profile/fetchData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi as GetThunkAPI<
            IThunkApiConfig<string>
        >

        try {
            const response = await extra.api.get<IProfile>('/profile')

            if (response.status >= 400) {
                throw new Error()
            }

            return response.data
        } catch (err) {
            console.log('error')
            return rejectWithValue('error')
        }
    },
)
