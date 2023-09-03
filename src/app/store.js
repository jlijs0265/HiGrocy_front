import { configureStore } from '@reduxjs/toolkit'
import processReducer from '../features/process/processSlice'
import generalFormReducer from '../features/process/generalFormSlice'

export const store = configureStore({
  reducer: {
    todos: processReducer,
    generalFrom: generalFormReducer,
  
  }
})