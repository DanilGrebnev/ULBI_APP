import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type IUser } from 'entities/User'

interface ILoginByUserNameProps {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<
    IUser,
    ILoginByUserNameProps,
    { rejectValue: string }
>('login/fetchByUserName', async (authData, thunkApi) => {
    try {
        const response = await axios.post<IUser>(
            'http://localhost:8000/login',
            authData,
        )

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (err) {
        console.log(err)
        return thunkApi.rejectWithValue('error')
    }
})
