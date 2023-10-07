import { type IStateSchema } from 'app/providers/StoreProvider/config/IStateSchema'

export const getLoginState = (state: IStateSchema) => state.loginForm

export const getLoginUserNameState = (state: IStateSchema) =>
    state.loginForm?.username ?? ''

export const getLoginPasswordState = (state: IStateSchema) =>
    state.loginForm?.password ?? ''

export const getLoginIsLoadingState = (state: IStateSchema) =>
    state.loginForm?.isLoading ?? false

export const getLoginErrorState = (state: IStateSchema) =>
    state.loginForm?.error
