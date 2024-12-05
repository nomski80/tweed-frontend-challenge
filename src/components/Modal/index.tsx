import { forwardRef, useRef, useImperativeHandle, PropsWithChildren } from 'react'

import styles from './Style.module.scss'

type ModalProps = {
	title: string,
}

const Modal = forwardRef(function Modal(props: PropsWithChildren<ModalProps>, ref) {
	const {
		title,
		children
	} = props

	const modalRef = useRef<HTMLDialogElement>(null)

	useImperativeHandle(ref, () => {
		return {
			showModal() {
				modalRef.current?.showModal()
			},
			close() {
				modalRef.current?.close()
			},
		}
	})

	return (
		<dialog
			ref={modalRef}
			className={styles.modal}
		>
			<div className={styles.header}>
				<div
					onClick={() => {
						if (modalRef?.current) {
							modalRef.current.close()
						}
					}}
					className={styles.closeButton}
				>
					X
				</div>

				{title}
			</div>

			<div className={styles.body}>
				{children}
			</div>
		</dialog>
	)
})

export default Modal
