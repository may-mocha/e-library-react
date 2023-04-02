import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from '../../http'

export const verifyOTPAction = createAsyncThunk(
    "verify",
    async (dispatch, getState) => {
        return http({
            method: 'post',
            url: 'user/verify',
            data: dispatch
        }).then(res => {
            return res
        })
    }
)

const verifySlice = createSlice({
    name: 'verify',
    initialState: {
        data: null,
        status: null,
    },
    reducers: {
        resetVerifyAction: (state) => {
            state.data = null
            state.status = null
        },
    },
    extraReducers: {
        [verifyOTPAction.pending]: (state, action) => {
            state.status = {
                value: 'loading',
                text: 'Verifing your OTP'
            }
        },
        [verifyOTPAction.fulfilled]: (state, action) => {
            state.status = {
                value: 'success',
                text: 'Verifing your OTP success'
            }
            state.data = action.payload
        },
        [verifyOTPAction.rejected]: (state, action) => {
            state.status = {
                value: 'failed',
                text: 'Verification process failed'
            }
        }
    }
})

export const { resetVerifyAction } = verifySlice.actions
export default verifySlice.reducer