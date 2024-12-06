import { PropsWithChildren } from 'react';
import { RgbColor } from 'react-colorful'
import cx from 'classnames'

import { getCustomStyle } from '../../utils';

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

	const customStyle = getCustomStyle(bgColor)

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