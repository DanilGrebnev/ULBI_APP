import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { v4 } from 'uuid'

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map((props) => (
                    <Route key={v4()} {...props} />
                ))}
            </Routes>
        </Suspense>
    )
}
