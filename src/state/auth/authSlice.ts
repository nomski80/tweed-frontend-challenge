import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { connectWallet } from "../../services/metaMask";

interface AuthState {
	walletId: string;
	status: 'idle' | 'pending' | 'error'
}

const initialState: AuthState = {
	walletId: '',
	status: 'idle'
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearWalletId: (state) => {
			state.walletId = ''
		},
		resetStatus: (state) => {
			state.status = 'idle'
		}
	},
	extraReducers: (builder) => {
		builder
		.addCase(signIn.pending, (state) => {
			state.status = 'pending'
		})
		.addCase(signIn.fulfilled, (state, action: PayloadAction<string>) => {
			state.walletId = action.payload
			state.status = 'idle'
		})
		.addCase(signIn.rejected, (state) => {
			state.status = 'error'
		})
	}
})

export const signIn = createAsyncThunk(
	'auth/signIn',
	async () => {
		const walletId = await connectWallet()
		return walletId
	}
)

export const { clearWalletId, resetStatus } = authSlice.actions

export default authSlice.reducer