import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { signIn } from '../../state/auth/authSlice'
import { AppDispatch, RootState } from '../../state/store'

import Button from '../../components/Button'

import tweedLogoLight from '../../assets/logo-tweed-light.svg'
import tweedLogoDark from '../../assets/logo-tweed-dark.svg'
import spinner from '../../assets/spinner.gif'

import styles from './Style.module.scss'
import { getIsBright } from '../../utils'

function Login() {
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()

	const { status, walletId } = useSelector((state: RootState) => state.auth)
	const { buttonBgColor, modalBgColor } = useSelector((state: RootState) => state.theme)

	const isLoggingIn = status === 'pending'
	const isBright = getIsBright(modalBgColor)

	return (
		<div
			className={styles.login}
		>
			<div>
				<img
					src={isBright ? tweedLogoDark : tweedLogoLight}
					className={styles.tweedLogo}
				/>
			</div>

			<div>
				Welcome To Tweed!
			</div>

			{walletId ? (
				<Button
					bgColor={buttonBgColor}
					onClick={() => navigate('wallet')}
					className={styles.loginButton}
				>
					View Wallet
				</Button>
			) : (
				<div className={styles.buttonContainer}>
					<Button
						bgColor={buttonBgColor}
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
					</Button>

					<div className={styles.errorMessage}>
						{status === 'error' ? 'User not authenticated' : ''}
					</div>
				</div>
			)}
		</div>
	)
}

export default Login