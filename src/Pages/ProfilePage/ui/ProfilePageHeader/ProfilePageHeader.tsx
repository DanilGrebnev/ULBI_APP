import { type FC } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button'

import s from './ProfilePageHeader.module.scss'

interface IProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<IProfilePageHeaderProps> = () => {
    return (
        <header className={s.ProfilePageHeader}>
            <Button theme={ThemeButton.BORDER}>Редактировать профиль</Button>
        </header>
    )
}

ProfilePageHeader.displayName = 'ProfilePageHeader'
