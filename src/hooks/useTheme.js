import { useEffect } from "react";
import { getLS } from "../helpers/local-storage";
import localStorageKeys from "../constants/local-storage-keys";
import { useDispatch } from "react-redux";
import { setDarkTheme } from "../features/theme/theme-slice";

export function useTheme() {
   const dispatch = useDispatch()
   useEffect(() => {
      const themeFromLS = getLS(localStorageKeys.theme)

      if (themeFromLS) {
         dispatch(setDarkTheme(JSON.parse(themeFromLS)))
      }
   }, [])
}