import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useDispatch } from 'react-redux'

import { clearWalletId, setWalletId } from '../../state/auth/authSlice'
import { setIsDarkMode } from '../../state/theme/themeSlice'

import { getAccount } from '../../services/metaMask'
import { AppDispatch } from '../../state/store'

import styles from './Style.module.scss'

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

	useEffect(() => {
		function handleThemeChange(e: MediaQueryListEvent) {
			const isDarkMode = e.matches
			dispatch(setIsDarkMode(isDarkMode))
		}

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange)

		return () => {
			window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange)
		}
	}, [dispatch])

	return (
		<div className={styles.app}>
			<Outlet />
		</div>
	)
}

export default App
