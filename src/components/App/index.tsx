import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'

import styles from './Style.module.scss'

function App() {
	// TODO: put theme context here
	const [ walletId, /* setWalletId */ ] = useState('')

	React.useEffect(() => {
		console.log(`!!! walletId:`, walletId)
	}, [walletId])

	useEffect(() => {
		// TODO: add listener for changes in walletId
		return () => {
			// TODO: remove listener for changes in walletId
		}
	}, [])

	return (
		<div className={styles.app}>
			<Outlet />
		</div>
	)
}

export default App
