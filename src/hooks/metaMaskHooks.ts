import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getAccount } from '../services/metaMask'

import { AppDispatch } from '../state/store'
import { clearWalletId, setWalletId } from '../state/auth/authSlice'

export function useResetWalletId() {
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
}

export function useWalletChangeListener() {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		if (!window.ethereum) {
			return
		}

		function handleAccountsChanged(accounts: string[]) {
			dispatch(setWalletId(accounts[0] || ''))
		}
		window.ethereum.on('accountsChanged', handleAccountsChanged)

		return () => {
			window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
		}
	}, [dispatch])
}