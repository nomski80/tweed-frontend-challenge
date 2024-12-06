import styles from './Style.module.scss'

// TODO: add button to navigate to '/'
function ErrorPage() {
	return (
		<div className={styles.errorPage}>
			<h1>
				Page Not Found
			</h1>
		</div>
	)
}

export default ErrorPage