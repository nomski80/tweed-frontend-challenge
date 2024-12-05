import { useState, useEffect } from 'react'

import { getWalletData } from '../../services/metaMask'

import styles from './Style.module.scss'

type WalletData = {
	balance?: number
	network?: string
}

function Wallet() {
	const [ walletId ] = useState('')

	const [ walletData, setWalletData ] = useState<WalletData>({})
	useEffect(() => {
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