import { useCallback, useState } from 'react'

import tweedLogo from '../../assets/logo-tweed-light.svg'

import styles from './Style.module.scss'

function Login() {
	const [ errorMessage, setErrorMessage ] = useState('')

	const handleLogin = useCallback(() => {
		console.log(`Click`)
		setErrorMessage('error')
	}, [])

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
					className={styles.loginButton}
				>
					Login with Metamask
				</button>

				<div className={styles.errorMessage}>
					{errorMessage}
				</div>
			</div>
		</div>
	)
}

export default Login