import AboutPage from 'Pages/AboutPage/ui/AboutPage'
import { MainPage } from 'Pages/MainPage'
import { NotFoundPage } from 'Pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'MAIN',
    ABOUT = 'ABOUT',
    NOT_FOUND = 'NOT_FOUND',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: RouteProps[] = [
    { path: RoutePath.MAIN, element: <MainPage /> },
    { path: RoutePath.ABOUT, element: <AboutPage /> },
    { path: RoutePath.NOT_FOUND, element: <NotFoundPage /> },
]
