import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
   name: 'theme',
   initialState: false,
   reducers: {
      setDarkTheme(state, action) {
         state = action.payload
         return state
      },
   },
})

export const { setDarkTheme } = themeSlice.actions
export default themeSlice.reducer