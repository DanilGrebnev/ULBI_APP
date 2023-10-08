import { profileReducer } from 'entities/Profile/model/slice/profileSlice'
import { type FC } from 'react'
import {
    DynamicModuleLoader,
    type TReducersList,
} from 'shared/lib/components/DynamicModuleLoader'

import s from './ProfilePage.module.scss'

const initialReducers: TReducersList = {
    profile: profileReducer,
}

const ProfilePage: FC = (props) => {
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
