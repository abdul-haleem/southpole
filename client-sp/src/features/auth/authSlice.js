import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

const authData = JSON.parse(localStorage.getItem('authdata'));

const initialState = {
    authData: authData ? authData : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const registerUser = createAsyncThunk('auth/register', 
async (user, thunkApi) => {
    try {
        return await authService.registerUser(user);        
    } catch (error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('auth/logout', async (user, thunkApi) => {
    await authService.logout();
})

export const login = createAsyncThunk("auth/login",
async (loginReq, thunkApi) => {
    try{
        return await authService.login(loginReq);       
    }catch (error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        },
    }, extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.authData = action.payload
        })
        .addCase(login.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.authData = null
        })
        
    }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer;