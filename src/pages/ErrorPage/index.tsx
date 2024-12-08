import { Link } from 'react-router'

import Header from '../../components/Header'

import styles from './Style.module.scss'
import { useGetErrorMessage } from '../../hooks/errorMessageHooks'

function ErrorPage() {
	const errorMessage = useGetErrorMessage()

	return (
		<div className={styles.errorPage}>
			<Header />

			<div>
				<h1>
					Oops! Something went wrong.
				</h1>

				<p>
					It seems the page you're looking for doesn't exist or has encountered an issue.
				</p>

				<p>
					<Link to="/">Go back to the homepage</Link> and try again!
				</p>

				<code>
					Error Message:<br/>
					{errorMessage}
				</code>
			</div>

		</div>
	)
}

export default ErrorPage