import { createSlice } from '@reduxjs/toolkit'
let id = 0;
const processSlice = createSlice({
  name: 'process',
  initialState: {process:[]},
  reducers: {
    processAdded(state, action) {
      const process = {id: id++,
      ...action.payload}
      state.process.push(process)
    },

    processSet(state, action){
      state.process = action.payload;
    },

    processRemoved(state, action) {
      console.log(action.payload);
      const filteredProcess = state.process.filter(process => {
        return process.id != action.payload;
    });
    state.process = filteredProcess;    }
  }
})

export const { processAdded, processChanged, processSet, processRemoved } = processSlice.actions
export default processSlice.reducer