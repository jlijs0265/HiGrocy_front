import { createSlice } from "@reduxjs/toolkit";
/*
  페이지 화면에서 Boolean값으로 처리해야하는 State를 모아둠.
  register : form내에 등록 / 수정,삭제 버튼 활성화
  modal : 모달창 자체 활성화
  modalType : 모달창 종류(/component/modals.js 참고)
*/

const generalTriggerSlice = createSlice({
  name: "trigger",
  initialState: {
    register: true,
    modal: false,
    modalType: "",
  },
  reducers: {
    // 등록버튼 활성화
    registerForm(state, action) {
      state.register = true;
    },
    // 수정, 삭제 버튼 활성화
    modifyForm(state, action) {
      state.register = false;
    },
    // 모달창 타입설정, 활성화
    toggleModal(state, action) {
      state.modalType = action.payload;
      state.modal = !state.modal;
    },
  },
});

export const { registerForm, modifyForm, toggleModal } =
  generalTriggerSlice.actions;
export default generalTriggerSlice.reducer;
