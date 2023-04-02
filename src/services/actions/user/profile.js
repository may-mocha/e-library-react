import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from '../../http'

export const getProfileAction = createAsyncThunk(
    "user",
    async (dispatch, getState) => {
        return http({
            method: 'get',
            url: 'user',
            headers: dispatch
        }).then(res => {
            return res
        })
    }
)

const profileSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        status: null,
    },
    reducers: {
        clearProfileAction: (state) => {
            state.data = null
            state.status = null
        },
    },
    extraReducers: {
        [getProfileAction.pending]: (state, action) => {
            state.status = {
                value: 'loading',
                text: 'Requesting profile information'
            }
        },
        [getProfileAction.fulfilled]: (state, action) => {
            state.status = {
                value: 'success',
                text: 'Successfully requested profile data'
            }
            state.data = action.payload
        },
        [getProfileAction.rejected]: (state, action) => {
            state.status = {
                value: 'failed',
                text: 'An error occur while requesting profile information'
            }
        }
    }
})

export const { clearProfileAction } = profileSlice.actions
export default profileSlice.reducer