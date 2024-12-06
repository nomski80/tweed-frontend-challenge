import { useState } from 'react'
import { RgbColorPicker, RgbColor } from 'react-colorful'

import Modal from '../../components/Modal'
import Button from '../../components/Button'

import styles from './Style.module.scss'

// TODO: persist state
function Customize() {
	// TODO: get from redux state
	const [ buttonColor, setButtonColor ] = useState<RgbColor>({r: 72, g: 72, b: 72})
	const [ modalColor, setModalColor ] = useState<RgbColor>({r: 0, g: 0, b: 0})

	return (
		<div className={styles.customize}>
			<h1>
				Customize
			</h1>

			<div className={styles.customizeOptions}>
				<div className={styles.option}>
					<Button bgColor={buttonColor}>
						Button
					</Button>

					<RgbColorPicker
						color={buttonColor}
						onChange={setButtonColor}
					/>
				</div>

				<div className={styles.option}>
					<Modal
						title="Modal Background"
						isDemo={true}
						bgColor={modalColor}
					>
						<RgbColorPicker
							color={modalColor}
							onChange={setModalColor}
						/>
					</Modal>
				</div>
			</div>
		</div>
	)
}

export default Customize