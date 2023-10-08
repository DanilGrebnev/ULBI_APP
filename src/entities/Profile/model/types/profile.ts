import { type Country } from 'shared/const/common/country'
import { type Currency } from 'shared/const/common/currency'

export interface IProfile {
    first: string
    lastName: string
    age: string
    currency: Currency
    city: string
    username: string
    country: Country
    avatar: string
}

export interface IProfileSchema {
    data?: IProfile
    isLoading?: boolean
    error?: string
    readonly?: boolean
}
