import { configureStore } from '@reduxjs/toolkit'
import processReducer from './processSlice'
import generalTriggerReducer from './generalTriggerSlice'
import ModalReducer from './modalSlice'

/*
  redux 사용하기위한 설정파일
  react 내에서 init 되면 아래 reducer 객체 이름으로 state값이 initstate값으로 초기화됨.
*/

export const store = configureStore({
  reducer: {
    process: processReducer,
    generalTrigger: generalTriggerReducer,
    modal: ModalReducer,
  
  },
  //action.payload 값이 원래 serializable 한 값으로 전송되어야함(객체, 리스트) tool-kit사용시 아닌값도 전송할수 있는데, 그때 에러나는 에러를 무시하기위한 설정
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),

})