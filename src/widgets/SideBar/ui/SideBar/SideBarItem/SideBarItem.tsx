import { useTranslation } from 'react-i18next'
import cn from 'shared/lib/classnames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'

import { type ISideBarItem } from './model/type/SideBarItem'
import s from './SideBarItem.module.scss'

interface ISideBarItemProps extends ISideBarItem {
    collapsed: boolean
}

export const SideBarItem = (props: ISideBarItemProps) => {
    const { text, to, Icon, collapsed } = props
    const { t } = useTranslation()

    return (
        <AppLink
            to={to}
            className={cn({ [s.collapsed]: collapsed }, s.linkItem)}
            theme={AppLinkTheme.SECONDARY}
        >
            <Icon className={s.icon} />
            <span className={s.linkItemText}>{t(text)}</span>
        </AppLink>
    )
}

SideBarItem.displayName = 'SideBarItem'
