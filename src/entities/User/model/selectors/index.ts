import { type IStateSchema } from 'app/providers/StoreProvider/config/IStateSchema'

export const getUserAuthData = (state: IStateSchema) => state.user?.authData
