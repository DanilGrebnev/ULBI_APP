import { createAsyncThunk } from '@reduxjs/toolkit'
import { type GetThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { type IThunkApiConfig } from 'app/providers/StoreProvider/config/IStateSchema'
import { type IUser } from 'entities/User'
import { userActions } from 'entities/User'
import i18n from 'shared/config/i18n/i18n'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'

interface ILoginData {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<IUser, ILoginData>(
    'login/fetchByUserName',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi as GetThunkAPI<
            IThunkApiConfig<string>
        >

        try {
            const response = await extra.api.post<IUser>('/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))

            dispatch(userActions.setAuthData(response.data))

            extra.navigate(RoutePath.PROFILE)

            return response.data
        } catch (err) {
            console.log(err)
            return rejectWithValue(i18n.t('Неправильный логин или пароль'))
        }
    },
)
