import {
    fetchProfileData,
    getIsErrorProfile,
    getProfileData,
    getProfileIsLoading,
    ProfileCard,
} from 'entities/Profile'
import { profileReducer } from 'entities/Profile/model/slice/profileSlice'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import {
    DynamicModuleLoader,
    type TReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { Text } from 'shared/ui/Text'

import s from './ProfilePage.module.scss'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const initialReducers: TReducersList = {
    profile: profileReducer,
}

const ProfilePage = () => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
    const profileData = useAppSelector(getProfileData)
    const isLoading = useAppSelector(getProfileIsLoading)
    const isError = useAppSelector(getIsErrorProfile)

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader
            reducerName="profile"
            reducers={initialReducers}
        >
            <div className={s['profile-content']}>
                <div className={s['profile-content__top']}>
                    <Text
                        contentWidth
                        title={t('Профиль')}
                    />
                    <ProfilePageHeader />
                </div>
                <ProfileCard
                    data={profileData}
                    isError={isError}
                    isLoading={isLoading}
                />
            </div>
        </DynamicModuleLoader>
    )
}

export default ProfilePage
