import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router'
import { Provider } from 'react-redux'
import {
	persistStore,
} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { store } from './state/store'

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
		// TODO: error page
		// errorElement: <ErrorPage />,
	},
])

const persistor = persistStore(store);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	</StrictMode>
)
