import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   filter: '',
// }

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
      changeFilterValue: (state, action) => {        
        return action.payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const { changeFilterValue } = filterSlice.actions
