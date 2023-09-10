import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { v4 } from 'uuid'

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routeConfig.map(({ element, path }) => {
                    const el = <div className='page-wrapper'>{element}</div>

                    return (
                        <Route
                            key={v4()}
                            path={path}
                            element={el}
                        />
                    )
                })}
            </Routes>
        </Suspense>
    )
}
