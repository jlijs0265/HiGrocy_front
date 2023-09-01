import { configureStore } from '@reduxjs/toolkit'
import processReducer from '../features/process/processSlice'

export const store = configureStore({
  reducer: {
    todos: processReducer,
  }
})