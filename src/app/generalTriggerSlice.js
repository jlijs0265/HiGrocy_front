import { createSlice } from '@reduxjs/toolkit'

const generalTriggerSlice = createSlice({
  name: 'trigger',
  initialState: {
    register : true,
    modal : false,
    modalType : ''
  },
  reducers: {
    registerForm(state, action) {
      state.register = true;
    },
    modifyForm(state, action) {
      state.register = false;
    },
    toggleModal(state, action) {
      state.modalType = action.payload;
      state.modal = !state.modal;
    },

  }
})

export const { registerForm, modifyForm, toggleModal } = generalTriggerSlice.actions
export default generalTriggerSlice.reducer