import { type FC, useState, useLayoutEffect, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Button, ThemeButton } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader'
import { Text } from 'shared/ui/Text'

import {
    getIsErrorProfile,
    getProfileData,
    getProfileIsLoading,
} from '../model/selectors/profileSelectors'
import s from './ProfileCard.module.scss'

interface IProfileCardProps {
    className?: string
}

export const ProfileCard: FC<IProfileCardProps> = () => {
    const profileData = useAppSelector(getProfileData)

    const [first, setValue] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')

    const { t } = useTranslation()
    const isLoading = useAppSelector(getProfileIsLoading)
    const isError = useAppSelector(getIsErrorProfile)

    const onChange = (input: string) => {
        setValue(input)
        console.log(first)
    }

    useEffect(() => {
        setValue(profileData.first)
        setLastName(profileData.lastName)
    }, [profileData])

    return (
        <div className={s.ProfileCard}>
            <Text title={t('Профиль')} />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Input
                        theme="hidden"
                        value={first}
                        onChange={onChange}
                    />

                    <Input
                        theme="hidden"
                        value={lastName}
                    />
                    <Button theme={ThemeButton.BORDER}>Редактировать профиль</Button>
                </>
            )}
        </div>
    )
}
