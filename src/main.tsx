import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
	RouterProvider,
	createBrowserRouter,
} from "react-router"
import { Provider } from 'react-redux'

import { store } from './state/store'

import { getAccount } from './services/metaMask'

import App from './components/App'

import Main from './pages/Main'
import Wallet from './pages/Wallet';
import Customize from './pages/Customize'

import './index.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		// loader: async () => {
		// // 	try {
		// 	const nom = await getAccount()
		// 	console.log(`nom:`, nom)
		// // 		if (!isAuthed) {
		// // 			throw 'Not Authorized'
		// // 		}

		// // 		return {
		// // 			walletId: localStorage.getItem('walletId')
		// // 		}
		// // 	} catch (error) {
		// // 		console.error(error);
		// // 		localStorage.removeItem('walletId')

		// // 		return {}
		// // 	}
		// 	return {}
		// },
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
		// TODO: error page
		// errorElement: <ErrorPage />,
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
)
