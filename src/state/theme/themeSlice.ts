import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RgbColor } from 'react-colorful';

interface ThemeState {
	modalBgColor: RgbColor
	buttonBgColor: RgbColor
	isDarkMode: boolean
}

const initialState: ThemeState = {
	modalBgColor: {r: 0, g: 0, b: 0},
	buttonBgColor: {r: 48, g: 48, b: 48},
	isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setIsDarkMode: (state, action: PayloadAction<boolean>) => {
			state.isDarkMode = action.payload
		},
		setModalBgColor: (state, action: PayloadAction<RgbColor>) => {
			state.modalBgColor = action.payload
		},
		setButtonBgColor: (state, action: PayloadAction<RgbColor>) => {
			state.buttonBgColor = action.payload
		},
	},
})

export const { setIsDarkMode, setModalBgColor,	setButtonBgColor } = themeSlice.actions

export default themeSlice.reducer