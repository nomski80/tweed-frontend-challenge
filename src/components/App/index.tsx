import { Outlet } from 'react-router'

import styles from './Style.module.scss'

function App() {
	return (
		<div className={styles.app}>
			<Outlet />
		</div>
	)
}

export default App
