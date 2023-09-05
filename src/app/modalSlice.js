import { createSlice } from '@reduxjs/toolkit'
let modal_id = 0;
const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modal_data:[],
  },
  reducers: {
    Added(state, action) {
      const modal_data = {id: modal_id++,
      ...action.payload}
      state.modal_data.push(modal_data)
    },

    Changed(state, action){
      let num = state.modal_data.findIndex(modal_data => {
        return modal_data.id == action.payload.id;
      });
      state.modal_data[num] = action.payload;
    },

    Set(state, action){
      state.modal_data = action.payload;
    },

    Removed(state, action) {
      const filteredModal_data = state.modal_data.filter(modal_data => {
        return modal_data.id != action.payload;
    });
    state.modal_data = filteredModal_data;    }
  }
})

export const { Added, Changed, Set, Removed } = modalSlice.actions
export default modalSlice.reducer