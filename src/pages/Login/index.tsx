import { useState, useCallback } from 'react'

import tweedLogo from '../../assets/logo-tweed-light.svg'
import spinner from '../../assets/spinner.gif'

import styles from './Style.module.scss'

function Login() {
	const [ isLoggingIn, setIsLoggingIn ] = useState(false)
	const [ errorMessage, /* setErrorMessage */] = useState('')

	const handleLogin = useCallback(async () => {
		if (isLoggingIn) {
			setIsLoggingIn(false)
		} else {
			setIsLoggingIn(true)
			console.log(`Click`)
		}
	}, [
		isLoggingIn,
	])

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

			<div className={styles.buttonContainer}>
				<button
					onClick={handleLogin}
					// disabled={isLoggingIn}
					className={styles.loginButton}
				>
					{isLoggingIn ? (
						<img src={spinner} className={styles.spinner} />
					) : 'Login with Metamask'}
				</button>

				<div className={styles.errorMessage}>
					{errorMessage}
				</div>
			</div>
		</div>
	)
}

export default Login