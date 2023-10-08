import { memo } from 'react'

import { sideBarConfig } from '../SideBarItem/model/config/sideBarConfig'
import { SideBarItem } from '../SideBarItem/SideBarItem'

interface SideBarItemListProps {
    collapsed: boolean
}

export const SideBarItemList = memo(({ collapsed }: SideBarItemListProps) => {
    return (
        <>
            {sideBarConfig.map(({ Icon, text, to }) => (
                <SideBarItem
                    key={to}
                    to={to}
                    Icon={Icon}
                    text={text}
                    collapsed={collapsed}
                />
            ))}
        </>
    )
})

SideBarItemList.displayName = 'SideBarItemList'
