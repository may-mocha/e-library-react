import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from '../../http'

export const getProductsAction = createAsyncThunk(
    "products",
    async (dispatch, getState) => {
        return http({
            method: 'get',
            url: `product`,
            ...dispatch
        }).then(res => res)
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: {},
        status: null
    },
    extraReducers: {
        [getProductsAction.pending]: (state, action) => {
            state.status = {
                value: 'loading',
                text: 'loading products'
            }
        },
        [getProductsAction.fulfilled]: (state, action) => {
            state.status = {
                value: 'success',
                text: 'products loaded'
            }
            state.data = action.payload
        },
        [getProductsAction.rejected]: (state, action) => {
            state.status = {
                value: 'failed',
                text: 'An error occur while loading products'
            }
        }
    }
})

export default productSlice.reducer