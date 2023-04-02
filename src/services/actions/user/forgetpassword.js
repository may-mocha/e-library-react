import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from '../../http'

export const sendOTPAction = createAsyncThunk(
    "forgotPassword",
    async (dispatch, getState) => {
        return http({
            method: 'post',
            url: 'exist/user',
            data: dispatch
        }).then(res => {
            return res
        })
    }
)

const forgotPasswordSlice = createSlice({
    name: 'forgotPassword',
    initialState: {
        data: null,
        status: null,
        mobile: null
    },
    reducers: {
        resetForgotPasswordAction: (state) => {
            state.data = null
            state.status = null
            state.mobile = null
            state.otp = null
        },
        saveMobileAction: (state, action) => {
            state.mobile = action.payload
        },
        saveOTPAction: (state, action) => {
            state.otp = action.payload
        }
    },
    extraReducers: {
        [sendOTPAction.pending]: (state, action) => {
            state.status = {
                value: {
                    value: 'loading',
                    text: 'Sending verification code'
                },
                text: 'Verification code sended'
            }
        },
        [sendOTPAction.fulfilled]: (state, action) => {
            state.status = {
                value: 'success',
                text: 'Sended verification code'
            }
            state.data = action.payload
        },
        [sendOTPAction.rejected]: (state, action) => {
            state.status = {
                value: 'failed',
                text: 'An error occur while sending verification code'
            }
        }
    }
})

export const { resetForgotPasswordAction, saveMobileAction, saveOTPAction } = forgotPasswordSlice.actions
export default forgotPasswordSlice.reducer