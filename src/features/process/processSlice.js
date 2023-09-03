import { createSlice } from '@reduxjs/toolkit'

const processSlice = createSlice({
  name: 'process',
  initialState: {process:[]},
  reducers: {
    processAdded(state, action) {
      state.process.push({
        id : state.process.length,
        mech_code: '',
        order: '',
        use_time: ''
      })
    },

    processSet(state, action){
      state.process = action.payload;
    },

    processRemoved(state, action) {
      console.log(action.payload);
      const filteredProcess = state.process.filter(processe => {
        return processe.id !== action.payload;
    });
    state.process = filteredProcess;    }
  }
})

export const { processAdded, processChanged, processSet, processRemoved } = processSlice.actions
export default processSlice.reducer