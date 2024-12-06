import { useRef, forwardRef, useImperativeHandle, PropsWithChildren } from 'react'
import { RgbColor } from 'react-colorful'
import cx from 'classnames'

import { getCustomStyle } from '../../utils'

import styles from './Style.module.scss'

type ModalProps = {
	title: string,
	isDemo?: boolean
	bgColor?: RgbColor
}

const Modal = forwardRef(function Modal(props: PropsWithChildren<ModalProps>, ref) {
	const {
		title,
		isDemo,
		bgColor,
		children
	} = props

	const modalRef = useRef<HTMLDialogElement>(null)

	useImperativeHandle(ref, () => {
		return {
			close() {
				modalRef.current?.close()
			},
			showModal() {
				modalRef.current?.showModal()
			},
		}
	})

	const customStyle = getCustomStyle(bgColor)

	return (
		<dialog
			ref={modalRef}
			open={isDemo}
			style={customStyle}
			className={cx(styles.modal, isDemo && styles.demo)}
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
