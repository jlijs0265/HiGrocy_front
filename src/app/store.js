import { configureStore } from '@reduxjs/toolkit'
import processReducer from './processSlice'
import generalTriggerReducer from './generalTriggerSlice'

export const store = configureStore({
  reducer: {
    process: processReducer,
    generalTrigger: generalTriggerReducer,
  
  }
})