import React from 'react'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { AppDispatch, RootState } from '../../state/store'
import { signIn } from '../../state/auth/authSlice'

// TODO: import logo based on theme context
import tweedLogo from '../../assets/logo-tweed-light.svg'
import spinner from '../../assets/spinner.gif'

import styles from './Style.module.scss'

function Login() {
	const navigate = useNavigate()

	const { status, walletId } = useSelector((state:RootState) => state.auth)
	const dispatch = useDispatch<AppDispatch>()

	// React.useEffect(() => {
	// 	console.log(`status:`, status)
	// }, [status])

	// React.useEffect(() => {
	// 	console.log(`walletId:`, walletId)
	// }, [walletId])

	const isLoggingIn = status === 'pending'

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
					onClick={() => dispatch(signIn())}
					disabled={isLoggingIn}
					className={styles.loginButton}
				>
					{isLoggingIn ? (
						<img src={spinner} className={styles.spinner} />
					) : 'Login with MetaMask'}
				</button>

				<div className={styles.errorMessage}>
					{status === 'error' ? 'User not authenticated' : ''}
				</div>
				</div>
			)}
		</div>
	)
}

export default Login