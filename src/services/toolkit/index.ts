import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
import newsSlice from "./newsSlice"

const rootReducer = combineReducers({
  toolkit: toolkitSlice,
  news: newsSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store