import { createSlice } from '@reduxjs/toolkit'

const generalFormSlice = createSlice({
  name: 'generalFrom',
  initialState: {
    register : true
  },
  reducers: {
    registerForm(state, action) {
      state.register = true;
    },
    modifyForm(state, action) {
      state.register = false;
    }
  }
})

export const { registerForm, modifyForm } = generalFormSlice.actions
export default generalFormSlice.reducer