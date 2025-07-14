import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    market:[],
  },
  reducers: {
    GET_MARKET(state, action) {
      state.market=(action.payload)
      console.log(action.payload)
      console.log(state.market)
    }
  }
})

export default toolkitSlice.reducer
export const {GET_MARKET} = toolkitSlice.actions