import React, { useEffect, useState, /* useContext */ } from 'react'
import { Outlet } from 'react-router'

// import { AuthProvider, AuthContext } from '../../context/authContext'

import styles from './Style.module.scss'

function App() {
	// TODO: put theme context here
	const [ walletId, /* setWalletId */ ] = useState('')
	// const { walletId, setWalletId } = useContext(AuthContext)

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
			{/* <AuthProvider> */}
				<Outlet />
			{/* </AuthProvider> */}
		</div>
	)
}

export default App
