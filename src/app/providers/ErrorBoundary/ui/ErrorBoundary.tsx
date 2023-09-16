import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react'
import { PageError } from 'widgets/PageError'
import { Preloader } from 'widgets/Preloader'

import {
    type ErrorBoundaryProps as IProps,
    type ErrorBoundaryState as IState,
} from './type'

export class ErrorBoundary extends Component<IProps, IState> {
    public state: IState = {
        hasError: false,
    }

    public static getDerivedStateFromError(_: Error): IState {
        return { hasError: true }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Uncaught error:', error, errorInfo)
    }

    public render(): ReactNode {
        if (this.state.hasError) {
            return (
                <Suspense fallback={<Preloader />}>
                    <PageError />
                </Suspense>
            )
        }

        return this.props.children
    }
}
