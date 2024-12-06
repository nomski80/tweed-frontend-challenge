import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import {
	useDispatch,
	// useSelector,
} from 'react-redux'

import { getAccount } from '../../services/metaMask'
import {
	// RootState,
	AppDispatch,
} from '../../state/store'

import styles from './Style.module.scss'
import { clearWalletId, setWalletId } from '../../state/auth/authSlice'

function App() {
	// TODO: put theme context here
	const dispatch = useDispatch<AppDispatch>()
	// const walletId = useSelector((state: RootState) => state.auth.walletId)

	// React.useEffect(() => {
	// 	console.log(`!!! walletId:`, walletId)
	// }, [walletId])

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
