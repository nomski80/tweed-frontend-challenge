import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../state/store'
import { setIsDarkMode } from '../state/theme/themeSlice'

export function useDarkModeListener() {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		function handleThemeChange(e: MediaQueryListEvent) {
			const isDarkMode = e.matches
			dispatch(setIsDarkMode(isDarkMode))
		}

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange)

		return () => {
			window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange)
		}
	}, [dispatch])
}