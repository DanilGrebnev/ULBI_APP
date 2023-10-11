import { type IStateSchema } from 'app/providers/StoreProvider/config/IStateSchema'

const profile = {
    first: '',
    lastName: '',
    age: '',
    currency: '',
    city: '',
    username: '',
    country: '',
    avatar: '',
}

export const getProfileData = (state: IStateSchema) => {
    return state.profile?.data ?? profile
}

export const getProfileIsReadonly = (state: IStateSchema) => {
    return state.profile?.readonly
}

export const getProfileIsLoading = (state: IStateSchema) => {
    return state.profile?.isLoading
}

export const getIsErrorProfile = (state: IStateSchema) => {
    return state.profile?.error
}
