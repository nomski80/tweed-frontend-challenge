import { useRef } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../state/store'

import Modal from '../../components/Modal'
import Login from '../../pages/Login'
import Button from '../../components/Button'

import styles from './Style.module.scss'

function Main() {
	const { modalBgColor } = useSelector((state: RootState) => state.theme)
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
				bgColor={modalBgColor}
			>
				<Login />
			</Modal>
		</div>
	)
}

export default Main