import { createSlice } from "@reduxjs/toolkit";
import { displayModes } from "../../constants/display-modes";

const displayModeSlice = createSlice({
   name: 'display-mode',
   initialState: displayModes.list,
   reducers: {
      setDisplayMode(state, action) {
         state = action.payload
         return state
      },
   },
})

export const { setDisplayMode } = displayModeSlice.actions
export default displayModeSlice.reducer