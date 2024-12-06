import { PropsWithChildren } from 'react';
import { RgbColor } from 'react-colorful'
import cx from 'classnames'

import { getBrightness, getColorString } from '../../utils';

import styles from './Style.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: RgbColor;
	className?: string;
}

function Button({
	bgColor,
	children,
	className,
	...props
}: PropsWithChildren<ButtonProps>) {

	// TODO: move to util function
	const customStyle: {background?: string, color?: string} = {}
	if (bgColor) {
		customStyle.background = getColorString(bgColor)
		customStyle.color = getBrightness(bgColor) > 128 ? "#000" : "#FFF";
	}

	return (
		<button
			{...props}
			style={customStyle}
			className={cx(styles.button, className)}
		>
			{children}
		</button>
	)
}

export default Button