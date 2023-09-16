import { lazy } from 'react'

// const standard = import('./MainPage')

// const Sleep = (ms = 2000): Promise<any> => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(import('./MainPage'))
//         }, ms)
//     })
// }

export const MainPageAsync = lazy(() => import('./MainPage'))
