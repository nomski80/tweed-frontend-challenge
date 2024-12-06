import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { RootState } from '../../state/store'

import { getWalletData } from '../../services/metaMask'

import styles from './Style.module.scss'

type WalletData = {
	balance?: number
	network?: string
}

// TODO: styling
function Wallet() {
	const navigate = useNavigate()
	const walletId = useSelector((state: RootState) => state.auth.walletId)

	const [ walletData, setWalletData ] = useState<WalletData>({})
	useEffect(() => {
		if (!walletId) {
			navigate('/')
		}

		async function getData() {
			const data = await getWalletData(walletId || '')
			setWalletData(data)
		}
		getData()
	}, [walletId])

	return (
		<div className={styles.wallet}>
			<h1>
				Wallet
			</h1>

			<div className={styles.walletData}>
				<ul>
					<li>
						Balance: {walletData.balance}
					</li>

					<li>
						Connected Network: {walletData.network}
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Wallet