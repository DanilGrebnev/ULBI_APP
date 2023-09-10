import { type FC } from 'react'
import s from './Navbar.module.scss'
import cn from 'shared/lib/classnames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'

interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    return (
        <div className={cn(s.Navbar, className)}>
            <div className={s.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to='/'
                >
                    Main
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to='/about'
                >
                    About
                </AppLink>
            </div>
        </div>
    )
}
