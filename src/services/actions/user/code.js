import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from '../../http'

export const resendCodeAction = createAsyncThunk(
    "resendCode",
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

const verificationSlice = createSlice({
    name: 'resendCode',
    initialState: {
        data: null,
        status: null
    },
    reducers: {
        resetResendCodeAction: (state) => {
            state.data = null
            state.status = null
        },
    },
    extraReducers: {
        [resendCodeAction.pending]: (state, action) => {
            state.status = {
                value: 'loading',
                text: 'Sending verification code'
            }
        },
        [resendCodeAction.fulfilled]: (state, action) => {
            state.status = {
                value: 'success',
                text: 'Verification code sended'
            }
            state.data = action.payload
        },
        [resendCodeAction.rejected]: (state, action) => {
            state.status = {
                value: 'failed',
                text: 'An error occur while sending verification code'
            }
        }
    }
})

export const { resetResendCodeAction } = verificationSlice.actions
export default verificationSlice.reducer