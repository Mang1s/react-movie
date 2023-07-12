import React from 'react'
import { setDarkTheme } from '../../features/theme/theme-slice'
import { useDispatch, useSelector } from 'react-redux'
import localStorageKeys from '../../constants/local-storage-keys'
import { setLS } from '../../helpers/local-storage'

function ThemeControls() {
   const dispatch = useDispatch()
   const handleButtonClick = ({ e, value }) => {
      dispatch(setDarkTheme(value))
      setLS(localStorageKeys.theme, value)
      e.currentTarget.classList.add('active')
      e.currentTarget?.nextElementSibling?.classList?.remove('active')
      e.currentTarget?.previousElementSibling?.classList?.remove('active')
   }

   const theme = useSelector(state => state.theme)

   return (
      <div>
         <button className={`btn btn-secondary m-2 ${theme ? '' : 'active'}`} onClick={(e) => handleButtonClick({ e, value: false })}>
            <i className="bi bi-brightness-high"></i>
         </button>
         <button className={`btn btn-secondary m-2 ${theme ? 'active' : ''}`} onClick={(e) => handleButtonClick({ e, value: true })}>
            <i className="bi bi-moon"></i>
         </button>
      </div>
   )
}

export default ThemeControls
