import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'

import { RootState } from '../../state/store'

import styles from './Style.module.scss'

function App() {
	// TODO: put theme context here
	const walletId = useSelector((state: RootState) => state.auth.walletId)

	// React.useEffect(() => {
	// 	console.log(`!!! walletId:`, walletId)
	// }, [walletId])

	useEffect(() => { // handle changes in walletId
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
