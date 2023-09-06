import { createSlice } from '@reduxjs/toolkit'
let id = 0;
const processSlice = createSlice({
  name: 'process',
  initialState: {
    table_data:[],
    bomtags:[],
  },
  reducers: {
    processAdded(state, action) {
      const process = {id: id++,
      ...action.payload}
      state.table_data.push(process)
    },

    ListAdded(state, action) {
      const process = {id: id++,
      ...action.payload}
      state.bomtags.push(process)
    },

    processChanged(state, action){
      let num = state.table_data.findIndex(process => {
        return process.id == action.payload.id;
      });
      state.table_data[num] = action.payload;
    },

    processSet(state, action){
      state.table_data = action.payload;
    },

    processRemoved(state, action) {
      const filteredProcess = state.table_data.filter(process => {
        return process.id != action.payload;
    });
    state.table_data = filteredProcess;    },

    ListRemoved(state, action) {
      const filteredProcess = state.bomtags.filter(process => {
        return process.id != action.payload.id;
    });
    state.bomtags = filteredProcess;    }
  }
})

export const { processAdded, processChanged, processSet, processRemoved, ListAdded, ListRemoved} = processSlice.actions
export default processSlice.reducer