import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RgbColor } from 'react-colorful';

interface ThemeState {
	isDarkMode: boolean
	modalBgColor: RgbColor
	buttonBgColor: RgbColor
}

const initialState: ThemeState = {
	isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
	modalBgColor: {r: 0, g: 0, b: 0},
	buttonBgColor: {r: 48, g: 48, b: 48},
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		resetTheme: (state) => {
			state.isDarkMode = initialState.isDarkMode
			state.modalBgColor = initialState.modalBgColor
			state.buttonBgColor = initialState.buttonBgColor
		},
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

export const { resetTheme, setIsDarkMode, setModalBgColor, setButtonBgColor } = themeSlice.actions

export default themeSlice.reducer