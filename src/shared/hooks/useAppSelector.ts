import { type RootState } from 'app/providers/StoreProvider/config/storeConfig'
import { type TypedUseSelectorHook, useSelector } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
