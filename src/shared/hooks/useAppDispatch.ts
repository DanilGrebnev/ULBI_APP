import { type AppDispatch } from 'app/providers/StoreProvider/config/storeConfig'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
