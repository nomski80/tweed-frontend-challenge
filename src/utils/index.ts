import { RgbColor } from 'react-colorful'

export function formatBalance(balance: string) {
	return parseInt(balance, 16)
}

const chainMapping:{[chainId: string]: string} = {
	'0x1': 'Ethereum Main Network (Mainnet)',
	'0x3': 'Ropsten Test Network',
	'0x4': 'Rinkeby Test Network',
	'0x5': 'Goerli Test Network',
	'0x2a': 'Kovan Test Network',
	'0xAA36A7': 'Sepolia Testnet',
	'0x89': 'Polygon Main Network',
	'0x13881': 'Mumbai Test Network',
	'0xA86A': 'Avalanche C-Chain Main Network',
	'0xA869': 'Fuji Test Network',
	'0x440': 'Metis Andromeda Main Network',
	'0x24C': 'Metis Stardust Test Network',
	'0x4E454152': 'Aurora Main Network',
	'0x4E454153': 'Aurora Test Network',
	'0x38': 'Binance Smart Chain Main Network',
	'0x61': 'Binance Smart Chain Test Network',
	'0xFA': 'Fantom Opera Main Network',
	'0xFA2': 'Fantom Test Network',
	'0x32': 'XDC Main Network',
	'0x33': 'XDC Apothem Testnet',
	'0x2329': 'Evmos Main Network',
	'0x2328': 'Evmos Test Network',
	'0x169': 'Theta Main Network',
	'0x16b': 'Theta Sapphire Test Network',
	'0x16c': 'Theta Amber Test Network',
	'0x16d': 'Theta Testnet',
	'0x13a': 'Filecoin Main Network',
	'0xc45': 'Filecoin Hyperspace',
	'0x7ab7': 'Filecoin Wallaby',
	'0x2fefd8': 'Filecoin Butterfly',
	'0x4cb2f': 'Filecoin Calibration Test Network',
	'0x1df5e76': 'Filecoin Local Test Network',
	'0x42': 'OKXChain',
	'0x41': 'OKXChain',
	'0x504': 'Moonbeam',
	'0x507': 'Moonbase Alpha Testnet',
	'0x64': 'Gnosis',
	'0x27D8': 'Gnosis Chiado Testnet',
	'0xA4EC': 'Celo',
	'0xAEF3': 'Celo Alfajores Testnet',
	'0xF370': 'Celo Baklava Testnet',
	'0xA4B1': 'Arbitrum One',
	'0x66EED': 'Arbitrum Goerli Testnet',
	'0xA': 'Optimism',
	'0x1A4': 'Optimism Goerli Testnet',
	'0x1E': 'Rootstock',
	'0x1F': 'Rootstock Testnet',
}

export function formatChainName(chainId: string) {
	return chainMapping[chainId] || ''
}

function getColorString(color: RgbColor) {
	return `rgb(${color.r}, ${color.g}, ${color.b}`
}

function getBrightness({ r, g, b }: RgbColor) {
	return (r * 299 + g * 587 + b * 114) / 1000
}

export function getIsBright(color: RgbColor) {
	return getBrightness(color) > 128
}

export function getCustomStyle(color?: RgbColor) {
	const result: {background?: string, color?: string} = {}

	if (color) {
		result.background = getColorString(color)
		result.color = getIsBright(color) ? "#000" : "#FFF";
	}

	return result
}