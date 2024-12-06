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

function InfoItem({title, value}: {title: string, value?: string | number}) {
	return (
		<div className={styles.infoItem}>
			<div className={styles.title}>
				{title}
			</div>

			<div className={styles.value}>
				{value}
			</div>
		</div>
	)
}

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
	}, [walletId, navigate])

	return (
		<div className={styles.wallet}>
			<h1>
				Wallet
			</h1>

			<div className={styles.walletInfo}>
				<InfoItem
					title="Balance"
					value={walletData.balance}
				/>

				<InfoItem
					title="Connected Network"
					value={walletData.network}
				/>
			</div>
		</div>
	)
}

export default Wallet