import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react'

import { ErrorPage } from '@/pages'

interface ErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		console.error(error.message)
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error(error, errorInfo)
	}

	render() {
		const { hasError } = this.state
		const { children } = this.props

		if (hasError) {
			return (
				<Suspense fallback=''>
					<ErrorPage />
				</Suspense>
			)
		}

		return children
	}
}

export default ErrorBoundary
