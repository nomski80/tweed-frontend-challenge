import { useSelector, useDispatch } from 'react-redux'
import { RgbColorPicker, RgbColor } from 'react-colorful'

import { setButtonBgColor, setModalBgColor } from '../../state/theme/themeSlice'
import { AppDispatch, RootState } from '../../state/store'

import Modal from '../../components/Modal'
import Button from '../../components/Button'

import styles from './Style.module.scss'

function Customize() {
	const { buttonBgColor, modalBgColor } = useSelector((state: RootState) => state.theme)

	const dispatch = useDispatch<AppDispatch>()

	return (
		<div className={styles.customize}>
			<h1>
				Customize
			</h1>

			<div className={styles.customizeOptions}>
				<div className={styles.option}>
					<Button bgColor={buttonBgColor}>
						Button
					</Button>

					<RgbColorPicker
						color={buttonBgColor}
						onChange={(selectedColor: RgbColor) => dispatch(setButtonBgColor(selectedColor))}
					/>
				</div>

				<div className={styles.option}>
					<Modal
						title="Modal Background"
						isDemo={true}
						bgColor={modalBgColor}
					>
						<RgbColorPicker
							color={modalBgColor}
							onChange={(selectedColor: RgbColor) => dispatch(setModalBgColor(selectedColor))}
						/>
					</Modal>
				</div>
			</div>
		</div>
	)
}

export default Customize