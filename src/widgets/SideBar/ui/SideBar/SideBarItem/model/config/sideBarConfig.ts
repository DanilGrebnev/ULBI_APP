import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import Profile from 'shared/assets/icons/profile-20-20.svg'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import { type ISideBarItem } from '../type/SideBarItem'

export const sideBarConfig: ISideBarItem[] = [
    { to: RoutePath.MAIN, text: 'Главная', Icon: MainIcon },
    { to: RoutePath.ABOUT, text: 'О сайте', Icon: AboutIcon },
    { to: RoutePath.PROFILE, text: 'Профиль', Icon: Profile },
]
