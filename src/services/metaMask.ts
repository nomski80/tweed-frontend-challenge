import { formatBalance, formatChainName } from "../utils";

function validateEthereum() {
	if (typeof window.ethereum === "undefined") {
		throw "MetaMask is not installed!"
	}
}

export async function connectWallet() {
	validateEthereum()

	const accounts = await window.ethereum.request({
		method: "eth_requestAccounts"
	});

	return accounts[0]
}

export async function checkEthereum() {
	validateEthereum()

	const permissions = await window.ethereum.request({
		method: "wallet_getPermissions",
	})

	console.log(`permissions:`, permissions)

	return permissions.length > 0
}

export async function getAccount() {
	validateEthereum()

	const accounts = await window.ethereum.request({
		method: 'eth_accounts',
	})

	if (accounts.length > 0) {
		return accounts[0]
	}

	return ''
}

export async function getWalletData(walletId: string) {
	const balance = await window.ethereum.request({
		method: 'eth_getBalance',
		params: [
			walletId,
			'latest',
		]
	})

	const chainId = await window.ethereum.request({
		method: 'eth_chainId'
	})

	return {
		balance: formatBalance(balance),
		network: formatChainName(chainId),
	}
}
