import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import cl from 'shared/lib/classnames'

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

    return (
        <Link
            to={to}
            className={cl(s.AppLink, className, s[theme])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
