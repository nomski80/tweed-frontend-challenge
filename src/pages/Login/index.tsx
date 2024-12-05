import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import { connectWallet } from '../../services/metaMask'

// TODO: import logo based on theme context
import tweedLogo from '../../assets/logo-tweed-light.svg'
import spinner from '../../assets/spinner.gif'

import styles from './Style.module.scss'

function Login() {
	const navigate = useNavigate()

	const [ walletId, setWalletId ] = useState('')

	React.useEffect(() => {
		console.log(`walletId:`, walletId)
	}, [walletId])

	const [ isLoggingIn, setIsLoggingIn ] = useState(false)
	const [ errorMessage, setErrorMessage] = useState('')

	async function handleLogin() {
		setIsLoggingIn(true)
		setErrorMessage('')

		try {
			const connectedWallet = await connectWallet()
			setWalletId(connectedWallet)
		} catch (error) {
			console.error(error);
			setErrorMessage('User not authenticated')
		} finally {
			setIsLoggingIn(false)
		}
	}

	return (
		<div className={styles.login}>
			<div>
				<img
					src={tweedLogo}
					className={styles.tweedLogo}
				/>
			</div>

			<div>
				Welcome To Tweed!
			</div>

			{walletId ? (
				<button
					onClick={() => navigate('wallet')}
					className={styles.loginButton}
				>
					View Wallet
				</button>
			) : (
				<div className={styles.buttonContainer}>
				<button
					onClick={handleLogin}
					disabled={isLoggingIn}
					className={styles.loginButton}
				>
					{isLoggingIn ? (
						<img src={spinner} className={styles.spinner} />
					) : 'Login with MetaMask'}
				</button>

				<div className={styles.errorMessage}>
					{errorMessage}
				</div>
				</div>
			)}
		</div>
	)
}

export default Login