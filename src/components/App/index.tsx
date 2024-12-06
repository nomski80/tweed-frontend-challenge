import { Outlet } from 'react-router'

import { useDarkModeListener } from '../../hooks/themeHooks'
import { useResetWalletId, useWalletChangeListener } from '../../hooks/metaMaskHooks'

import Header from '../Header'

import styles from './Style.module.scss'

function App() {
	useResetWalletId()
	useWalletChangeListener()

	useDarkModeListener()

	return (
		<div className={styles.app}>
			<Header />
			<Outlet />
		</div>
	)
}

export default App
