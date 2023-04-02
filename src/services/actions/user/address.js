import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { http } from '../../http'

export const getDeliveryAddressAction = createAsyncThunk(
  "user-address",
  async (dispatch, getState) => {
    return http({
      method: 'get',
      url: 'user/address',
      ...dispatch
    }).then(res => {
      return res
    })
  }
)

const userAddressSlice = createSlice({
  name: 'user-address',
  initialState: {
    data: [],
    status: null,
  },
  reducers: {
    clearUserAddressAction: (state) => {
      state.data = []
      state.status = null
    },
  },
  extraReducers: {
    [getDeliveryAddressAction.pending]: (state, action) => {
      state.status = {
        value: 'loading',
        text: 'Requesting user delivery address'
      }
    },
    [getDeliveryAddressAction.fulfilled]: (state, action) => {
      state.status = {
        value: 'success',
        text: 'Successfully requested user delivery address'
      }
      state.data = action.payload
    },
    [getDeliveryAddressAction.rejected]: (state, action) => {
      state.status = {
        value: 'failed',
        text: 'An error occur while requesting user delivery address'
      }
    }
  }
})

export const { clearUserAddressAction } = userAddressSlice.actions
export default userAddressSlice.reducer