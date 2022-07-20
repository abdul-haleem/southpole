import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
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
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload
        })
        .addCase(registerUser.rejected, (state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null
        })
        
    }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer;