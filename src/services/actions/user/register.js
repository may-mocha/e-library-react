import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from '../../http'

export const postRegisterAction = createAsyncThunk(
    "registerUser",
    async (dispatch, getState) => {
        return http({
            method: 'post',
            url: 'user/signup',
            data: dispatch
        }).then(res => {
            return res
        })
    }
)

const registerSlice = createSlice({
    name: 'registerUser',
    initialState: {
        data: null,
        status: null,
    },
    reducers: {
        resetRegisterAction: (state) => {
            state.data = null
            state.status = null
            state.mobile = null
        },
        setRegisterMobileAction: (state, action) => {
            state.mobile = action.payload
        }
    },
    extraReducers: {
        [postRegisterAction.pending]: (state, action) => {
            state.status = {
                value: 'loading',
                text: 'Submiting registration'
            }
        },
        [postRegisterAction.fulfilled]: (state, action) => {
            state.status = {
                value: 'success',
                text: 'Submiting registration success'
            }
            state.data = action.payload
        },
        [postRegisterAction.rejected]: (state, action) => {
            state.status = {
                value: 'failed',
                text: 'An error occur while submiting registration'
            }
        }
    }
})

export const { resetRegisterAction, setRegisterMobileAction } = registerSlice.actions
export default registerSlice.reducer