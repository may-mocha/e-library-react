import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from '../../http'

export const getDictionaryAction = createAsyncThunk(
    "dictionary",
    async (dispatch, getState) => {
        return http({
            method: 'get',
            url: 'dictionary'
        }).then(res => res)
    }
)

const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState: {
        data: null,
        status: null,
        lang: 'my',
        primary: true
    },
    reducers: {
        changeLanguageAction: (state, action) => {
            state.lang = action.payload
        }
    },
    extraReducers: {
        [getDictionaryAction.pending]: (state, action) => {
            state.status = {
                value: 'loading',
                text: 'Configuration UI text and localization'
            }
        },
        [getDictionaryAction.fulfilled]: (state, action) => {
            state.status = {
                value: 'success',
                text: 'Successfully configurated UI text and localization'
            }
            state.data = action.payload
        },
        [getDictionaryAction.rejected]: (state, action) => {
            state.status = {
                value: 'failed',
                text: 'An error occur while configurate UI text and localization'
            }
        }
    }
})

export const { changeLanguageAction } = dictionarySlice.actions

export default dictionarySlice.reducer
