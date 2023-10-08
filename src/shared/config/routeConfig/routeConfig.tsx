import AboutPage from 'Pages/AboutPage/ui/AboutPage'
import { MainPage } from 'Pages/MainPage'
import { NotFoundPage } from 'Pages/NotFoundPage'
import { ProfilePageAsync } from 'Pages/ProfilePage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'MAIN',
    ABOUT = 'ABOUT',
    PROFILE = 'PROFILE',
    // Last
    NOT_FOUND = 'NOT_FOUND',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',

    // Last
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: RouteProps[] = [
    { path: RoutePath.MAIN, element: <MainPage /> },
    { path: RoutePath.ABOUT, element: <AboutPage /> },
    { path: RoutePath.PROFILE, element: <ProfilePageAsync /> },
    // Last
    { path: RoutePath.NOT_FOUND, element: <NotFoundPage /> },
]
