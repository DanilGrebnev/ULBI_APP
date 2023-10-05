import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type IUser } from 'entities/User'
import { userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'

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

        localStorage.setItem(
            USER_LOCAL_STORAGE_KEY,
            JSON.stringify(response.data),
        )

        thunkApi.dispatch(userActions.setAuthData(response.data))

        return response.data
    } catch (err) {
        console.log(err)
        return thunkApi.rejectWithValue(i18n.t('Неправильный логин или пароль'))
    }
})
