import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/theme-slice'
import displayModeReducer from '../features/display-mode/display-mode-slice'

const store = configureStore({
   reducer: {
      theme: themeReducer,
      displayMode: displayModeReducer
   },
})

export default store