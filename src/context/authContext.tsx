import React, { createContext, useState, Dispatch, SetStateAction, PropsWithChildren } from 'react'
import { getAccount } from '../services/metaMask';

const AuthContext = createContext<{
	walletId: string;
	setWalletId: Dispatch<SetStateAction<string>>
}>({
	walletId: await getAccount(),
	setWalletId: () => {},
});

function AuthProvider({children}: PropsWithChildren) {
	const [ walletId, setWalletId ] = useState('')

	// React.useEffect(() => {
	// 	console.log(`context walletId:`, walletId)
	// }, [walletId])

	return (
		<AuthContext.Provider value={{walletId, setWalletId}}>
			{children}
		</AuthContext.Provider>
	)
}

export {
	AuthContext,
	AuthProvider,
}