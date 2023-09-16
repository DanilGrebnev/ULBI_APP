import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { v4 } from 'uuid'
import { Preloader } from 'widgets/Preloader'

export const AppRouter = (): React.ReactElement => {
    return (
        <Suspense fallback={<Preloader />}>
            <Routes>
                {routeConfig.map(({ element, path }) => {
                    const el = <div className="page-wrapper">{element}</div>
                    return (
                        <React.Fragment key={v4()}>
                            <Route
                                key={v4()}
                                path={path}
                                element={el}
                            />
                        </React.Fragment>
                    )
                })}
            </Routes>
        </Suspense>
    )
}
