import { createSlice } from '@reduxjs/toolkit'
const processSlice = createSlice({
  name: 'process',
  initialState: {
    table_data:[],
    bomtags:[],
    pagination:{criteria : { pageNum : 1 }, pageCount : 5},
  },
  reducers: {
    processAdded(state, action) {
      state.table_data.push(action.payload)
    },

    ListAdded(state, action) {
      const process = action.payload
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
    state.bomtags = filteredProcess;    },
    paginationSet(state, action) {
      state.pagination = action.payload;
    },

    bomRemoved(state, action) {
      const filteredProcess = [...state.bomtags.slice(0, action.payload), ...state.bomtags.slice(action.payload + 1)];
      state.bomtags = filteredProcess;
    }
  }
})

export const { processAdded, processChanged, processSet, processRemoved, ListAdded, ListRemoved, paginationSet, bomRemoved} = processSlice.actions
export default processSlice.reducer