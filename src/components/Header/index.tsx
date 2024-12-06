import { MouseEvent } from 'react'
import { NavLink } from 'react-router'
import { useSelector } from 'react-redux'

import { RootState } from '../../state/store'

import tweedLogoLight from '../../assets/logo-tweed-light.svg'
import tweedLogoDark from '../../assets/logo-tweed-dark.svg'

import styles from './Style.module.scss'
import { useCallback } from 'react'

function Header() {
	const { isDarkMode } = useSelector((state: RootState) => state.theme)
	const { walletId } = useSelector((state: RootState) => state.auth)

	const handleWalletNav = useCallback((e: MouseEvent) => {
		if (!walletId) {
			e.preventDefault()
		}
	}, [walletId])

	return (
		<div className={styles.header}>
			<NavLink to="/">
				<img
					src={isDarkMode ? tweedLogoLight : tweedLogoDark}
					className={styles.tweedLogo}
				/>
			</NavLink>

			<NavLink
				to="/wallet"
				onClick={handleWalletNav}
				className={!walletId ? styles.disabled : undefined}
			>
				Wallet
			</NavLink>

			<NavLink to="/customize">
				Customize
			</NavLink>
		</div>
	)
}

export default Header