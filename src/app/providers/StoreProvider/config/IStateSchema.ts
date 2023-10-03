import { type IUserSchema } from 'entities/User'
import { type ILoginSchema } from 'features/AuthByUsername/model/types'

export interface IStateSchema {
    user: IUserSchema
    loginForm: ILoginSchema
}
