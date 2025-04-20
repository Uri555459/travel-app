import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './index.css'
import { About, Home, NotFound } from './pages'
import ErrorBoundary from './providers/ErrorBoundary'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ErrorBoundary>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</ErrorBoundary>
		</BrowserRouter>
	</StrictMode>
)
