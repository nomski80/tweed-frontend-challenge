import { NavLink } from 'react-router'
import { useSelector } from 'react-redux'

import { RootState } from '../../state/store'

import tweedLogoLight from '../../assets/logo-tweed-light.svg'
import tweedLogoDark from '../../assets/logo-tweed-dark.svg'

import styles from './Style.module.scss'

function Header() {
	const { isDarkMode } = useSelector((state: RootState) => state.theme)

	return (
		<div className={styles.header}>
			<NavLink to="/">
				<img
					src={isDarkMode ? tweedLogoLight : tweedLogoDark}
					className={styles.tweedLogo}
				/>
			</NavLink>

			<NavLink to="/wallet">
				Wallet
			</NavLink>

			<NavLink to="/customize">
				Customize
			</NavLink>
		</div>
	)
}

export default Header