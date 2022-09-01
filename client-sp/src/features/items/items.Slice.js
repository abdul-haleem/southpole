import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import itemsService from './items.service';

const initialState = {
    tableData: [],
    pageNumber: 1,
    pageSize: 10,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const listItems = createAsyncThunk('items/list', 
async (pageData,searchReq, thunkApi) => {
    try {
        return await itemsService.listItems(pageData,searchReq);        
    } catch (error) {
        console.error(error)
        const message = (error.response && error.response.data && error.response.data.message)
        || error.message || error.toString();
        return thunkApi.rejectWithValue(message)
    }
})


export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        },
    }, extraReducers: (builder) => {
        
    }
})


export default itemsSlice.reducer;