import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from '../../http'
import { getEndpointUrl, routeFilter } from '../../routes'

export const getProductDetailAction = createAsyncThunk(
    "productDetail",
    async (dispatch, getState) => {
        let { id, ...field } = dispatch
        return http({
            method: 'get',
            url: `${getEndpointUrl('getProductById', { id })}${routeFilter(field)}`,
        }).then(res => res)
    }
)

const productSlice = createSlice({
    name: 'productDetail',
    initialState: {
        data: null,
        status: null
    },
    extraReducers: {
        [getProductDetailAction.pending]: (state, action) => {
            state.status = {
                value: 'loading',
                text: 'Loading product detail'
            }
        },
        [getProductDetailAction.fulfilled]: (state, action) => {
            state.status = {
                value: 'success',
                text: 'Product detail loaded'
            }
            state.data = action.payload
        },
        [getProductDetailAction.rejected]: (state, action) => {
            state.status = {
                value: 'failed',
                text: 'An error occur while loading product detail'
            }
        }
    }
})

export default productSlice.reducer