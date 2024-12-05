import { useRef } from 'react'

import Modal from '../../components/Modal'

import styles from './Style.module.scss'

function App() {
	const modalRef = useRef<HTMLDialogElement>(null)

  return (
		<div className={styles.app}>
			<button
				onClick={() => {
					if (modalRef.current) {
						modalRef.current.showModal()
					}
				}}
			>
				Log in
			</button>

			<Modal
				title="Sign In"
				ref={modalRef}
			>
				hello
			</Modal>
		</div>
  )
}

export default App
