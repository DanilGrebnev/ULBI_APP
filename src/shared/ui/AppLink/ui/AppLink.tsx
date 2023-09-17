import { type FC } from 'react'
import { type LinkProps, NavLink } from 'react-router-dom'
import cn from 'shared/lib/classnames'

import s from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        ...otherProps
    } = props

    const classNames = [s.AppLink, s[theme], className]

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                cn(...classNames, { [s.active]: isActive })
            }
            {...otherProps}
        >
            {children}
        </NavLink>
    )
}
