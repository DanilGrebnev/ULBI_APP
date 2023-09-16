import AboutPage from 'Pages/AboutPage/ui/AboutPage'
import { MainPage } from 'Pages/MainPage'
import { NotFoundPage } from 'Pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: RouteProps[] = [
    { path: RoutePath.main, element: <MainPage /> },
    { path: RoutePath.about, element: <AboutPage /> },
    { path: RoutePath.not_found, element: <NotFoundPage /> },
]
