import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { AppDispatch, RootState } from '../../state/store'
import { signIn } from '../../state/auth/authSlice'

// TODO: use colors from theme
// TODO: import logo based on isDarkMode
import tweedLogo from '../../assets/logo-tweed-light.svg'
import spinner from '../../assets/spinner.gif'

import styles from './Style.module.scss'

function Login() {
	const navigate = useNavigate()

	const { status, walletId } = useSelector((state: RootState) => state.auth)
	const dispatch = useDispatch<AppDispatch>()

	const isLoggingIn = status === 'pending'

	return (
		<div
			// style={{}} // TODO: use bg-color from theme
			className={styles.login}
		>
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
				// TODO: consider extracting to new component
				<button
					// style={{}} // TODO: use bg-color from theme
					onClick={() => navigate('wallet')}
					className={styles.loginButton}
				>
					View Wallet
				</button>
			) : (
				// TODO: consider extracting to new component
				<div className={styles.buttonContainer}>
					<button
						// style={{}} // TODO: use bg-color from theme
						onClick={async () => {
							const request = await dispatch(signIn())
							if (request.type.includes('fulfilled')) {
								navigate('wallet')
							}
						}}
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