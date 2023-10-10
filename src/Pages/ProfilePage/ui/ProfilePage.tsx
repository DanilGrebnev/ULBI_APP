import { fetchProfileData } from 'entities/Profile'
import { profileReducer } from 'entities/Profile/model/slice/profileSlice'
import { type FC, useEffect } from 'react'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import {
    DynamicModuleLoader,
    type TReducersList,
} from 'shared/lib/components/DynamicModuleLoader'

import s from './ProfilePage.module.scss'

const initialReducers: TReducersList = {
    profile: profileReducer,
}

const ProfilePage: FC = (props) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducerName="profile"
            reducers={initialReducers}
        >
            <div>PROFILE</div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
