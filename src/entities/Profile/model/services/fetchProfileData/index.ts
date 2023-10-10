import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IThunkExtraConfig } from 'app/providers/StoreProvider/config/IStateSchema'

import { type IProfile } from './../../types/profile'
export const fetchProfileData = createAsyncThunk<
    IProfile,
    void,
    { extra: IThunkExtraConfig }
>('prodile/fetchData', async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
        const response = await extra.api.get<IProfile>('/profile')

        return response.data
    } catch (err) {
        console.log(err)
        return rejectWithValue('error')
    }
})
