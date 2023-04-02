import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from '../../http'
import { getEndpointUrl } from '../../routes'

export const loginUserAction = createAsyncThunk(
    "token",
    async (dispatch, getState) => {
        return http({
            method: 'get',
            url: getEndpointUrl('login'),
            headers: dispatch
        }).then(res => {
            return res
        })
    }
)

const loginUserSlice = createSlice({
    name: 'token',
    initialState: {
        data: null,
        status: null,
    },
    reducers: {
        logoutUserAction: (state) => {
            state.data = null
            state.status = null
        },
    },
    extraReducers: {
        [loginUserAction.pending]: (state, action) => {
            state.status = {
                value: 'loading',
                text: 'Signing in'
            }
        },
        [loginUserAction.fulfilled]: (state, action) => {
            state.status = {
                value: 'success',
                text: 'Log in success'
            }
            state.data = action.payload
        },
        [loginUserAction.rejected]: (state, action) => {
            state.status = {
                value: 'failed',
                text: 'An error occur while log in'
            }
        }
    }
})

export const { logoutUserAction } = loginUserSlice.actions
export default loginUserSlice.reducer