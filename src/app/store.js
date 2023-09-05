import { configureStore } from '@reduxjs/toolkit'
import processReducer from './processSlice'
import generalTriggerReducer from './generalTriggerSlice'

export const store = configureStore({
  // redux가 react 내에서 init 되면 아래 reducer 객체 이름으로 state값이 initstate값으로 초기화됨.
  reducer: {
    process: processReducer,
    generalTrigger: generalTriggerReducer,
  
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),

})