import { type FC } from 'react'
import { useAppSelector } from 'shared/hooks/useAppSelector'

import {
    getIsErrorProfile,
    getProfileData,
    getProfileIsLoading,
} from '../model/selectors/profileSelectors'
import s from './ProfileCard.module.scss'

interface IProfileCardProps {
    className?: string
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
    const profileData = useAppSelector(getProfileData)
    const isLoading = useAppSelector(getProfileIsLoading)
    const isError = useAppSelector(getIsErrorProfile)

    return <div className={s.ProfileCard}></div>
}
