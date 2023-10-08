import { type store } from 'app/providers/StoreProvider/config/storeConfig'
import { useDispatch } from 'react-redux'
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
