import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "newsSlice",
  initialState: {
    news: [],
  },
  reducers: {
    GET_NEWS(state, action) {
      state.news = (action.payload)
      console.log(action.payload)
      console.log(state.news)
    }
  }
})

export default newsSlice.reducer
export const { GET_NEWS } = newsSlice.actions