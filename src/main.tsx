import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
	RouterProvider,
	createBrowserRouter,
} from "react-router"

import App from './components/App'

import Main from './pages/Main'
import Wallet from './pages/Wallet';
import Customize from './pages/Customize'

import './index.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Main />,
			},
			{
				path: 'customize',
				element: <Customize />,
			},
			{
				path: 'wallet',
				element: <Wallet />,
			},
		],
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
