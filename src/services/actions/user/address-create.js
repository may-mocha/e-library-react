import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from '../../http'

export const createDeliveryAddressAction = createAsyncThunk(
  "create-user-address",
  async (dispatch, getState) => {
    return http({
      method: 'post',
      url: 'user/address/add',
      ...dispatch
    }).then(res => {
      return res
    })
  }
)

const createUserAddressSlice = createSlice({
  name: 'create-user-address',
  initialState: {
    data: null,
    status: null,
    active: null
  },
  reducers: {
    clearActiveUserAddressAction: (state) => {
      state.data = null
      state.status = null
    },
    setActiveUserAddressAction: (state, action) => {
      state.active = action.reducer
    },
  },
  extraReducers: {
    [createDeliveryAddressAction.pending]: (state, action) => {
      state.status = {
        value: 'loading',
        text: 'Requesting user delivery address'
      }
    },
    [createDeliveryAddressAction.fulfilled]: (state, action) => {
      state.status = {
        value: 'success',
        text: 'Successfully requested user delivery address'
      }
      state.data = action.payload
    },
    [createDeliveryAddressAction.rejected]: (state, action) => {
      state.status = {
        value: 'failed',
        text: 'An error occur while requesting user delivery address'
      }
    }
  }
})

export const { clearActiveUserAddressAction, setActiveUserAddressAction } = createUserAddressSlice.actions
export default createUserAddressSlice.reducer