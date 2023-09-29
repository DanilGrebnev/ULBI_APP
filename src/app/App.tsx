import { AppRouter } from 'app/providers/router'
import { type FC, Suspense, useState } from 'react'
import cn from 'shared/lib/classnames'
import { Modal } from 'shared/ui/Modal/Modal'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'

import { useTheme } from './providers/ThemeProvider'

export const App: FC = () => {
    const { theme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = (): void => {
        setIsOpen((p) => !p)
    }

    return (
        <Suspense fallback="loading">
            <div className={cn('app', theme)}>
                <button onClick={toggleModal}>Toggle modal</button>
                <NavBar />
                <Modal
                    onClose={() => {
                        setIsOpen(false)
                    }}
                    isOpen={isOpen}
                />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    )
}
