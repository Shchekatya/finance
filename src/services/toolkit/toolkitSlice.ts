import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    market: [],
    isLoading: false,
    isError: false,
  },
  reducers: {
    GET_MARKET(state, action) {
      state.market = (action.payload)
      console.log(action.payload)
      console.log(state.market)
    },
    IS_LOADING(state, action) {
      state.isLoading = (action.payload)
    },
    IS_ERROR(state, action) {
      state.isError = (action.payload)
    }
  }
})

export default toolkitSlice.reducer
export const { GET_MARKET, IS_LOADING, IS_ERROR } = toolkitSlice.actions