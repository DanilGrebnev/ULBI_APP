import { type FC, useState } from 'react'
import { ErrorMessage } from 'shared/ui/ErrorMessage'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader'

import { type getProfileData } from '../model/selectors/profileSelectors'
import s from './ProfileCard.module.scss'

interface IProfileCardProps {
    className?: string
    data?: ReturnType<typeof getProfileData>
    isLoading?: boolean
    isError?: string
}

export const ProfileCard: FC<IProfileCardProps> = (props) => {
    const { data, isLoading, isError } = props

    const [first, setValue] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')

    const onChange = (input: string) => {
        setValue(input)
    }

    return (
        <div id="Profile">
            {isLoading ? (
                <Loader color="blue" />
            ) : isError ? (
                <ErrorMessage error={isError} />
            ) : (
                <div className={s['profile-card-content']}>
                    <div>
                        <Input
                            theme="hidden"
                            value={data?.first}
                            onChange={onChange}
                        />

                        <Input
                            theme="hidden"
                            value={data?.lastName}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
