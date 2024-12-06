import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useDispatch } from 'react-redux'

import { getAccount } from '../../services/metaMask'
import { AppDispatch } from '../../state/store'

import styles from './Style.module.scss'
import { clearWalletId, setWalletId } from '../../state/auth/authSlice'

// TODO: add header navbar: Logo (home) | Wallet (disabled if not signed in) | Customize
function App() {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		async function get() {
			const account = await getAccount()
			if (!account) {
				dispatch(clearWalletId())
			}
		}
		get()
	}, [dispatch])

	useEffect(() => {
		// TODO: consider making this a custom hook
		function handleAccountsChanged(accounts: string[]) {
			dispatch(setWalletId(accounts[0] || ''))
		}

		window.ethereum.on('accountsChanged', handleAccountsChanged)

		return () => {
			window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
		}
	}, [dispatch])

	return (
		<div className={styles.app}>
			<Outlet />
		</div>
	)
}

export default App
