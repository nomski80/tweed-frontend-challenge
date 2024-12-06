import { useRef } from 'react'

import Modal from '../../components/Modal'
import Login from '../../pages/Login'
import Button from '../../components/Button'

import styles from './Style.module.scss'

function Main() {
	const modalRef = useRef<HTMLDialogElement>(null)

	return (
		<div className={styles.main}>
			<Button
				onClick={() => {
					if (modalRef.current) {
						modalRef.current.showModal()
					}
				}}
			>
				Log in
			</Button>

			<Modal
				ref={modalRef}
				title="Login"
			>
				<Login />
			</Modal>
		</div>
	)
}

export default Main