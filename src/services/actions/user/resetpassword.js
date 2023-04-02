import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from '../../http'

export const resetPasswordAction = createAsyncThunk(
    "resetPassword",
    async (dispatch, getState) => {
        return http({
            method: 'post',
            url: 'user/reset/password',
            data: dispatch
        }).then(res => {
            return res
        })
    }
)

const resetPasswordSlice = createSlice({
    name: 'resetPassword',
    initialState: {
        data: null,
        status: null,
    },
    reducers: {
        clearResetPasswordAction: (state) => {
            state.data = null
            state.status = null
        },
    },
    extraReducers: {
        [resetPasswordAction.pending]: (state, action) => {
            state.status = {
                value: 'loading',
                text: 'Reseting password'
            }
        },
        [resetPasswordAction.fulfilled]: (state, action) => {
            state.status = {
                value: 'success',
                text: 'Successfully reseted'
            }
            state.data = action.payload
        },
        [resetPasswordAction.rejected]: (state, action) => {
            state.status = {
                value: 'failed',
                text: 'An error while reseting password'
            }
        }
    }
})

export const { clearResetPasswordAction } = resetPasswordSlice.actions
export default resetPasswordSlice.reducer