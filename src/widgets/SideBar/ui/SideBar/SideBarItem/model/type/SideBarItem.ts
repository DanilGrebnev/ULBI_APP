import type React from 'react'

export interface ISideBarItem {
    text: string
    to: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}
