import { useEffect, useState } from 'react'
import { API_SEARCH_URL } from './constants/api-urls'
import './App.scss'
import { formatData } from './helpers/format-data'
import MovieCard from './components/MovieCard/MovieCard'
import MovieCardsControls from './components/MovieCardsControls/MovieCardsControls'
import { displayModes } from './constants/display-modes'
import axios from 'axios'
import ThemeControls from './components/ThemeControls/ThemeControls'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from './hooks/useTheme'
import { setDisplayMode } from './features/display-mode/display-mode-slice'

function App() {
   const [searchText, setSearchText] = useState('')
   const [searchResult, setSearchResult] = useState([])
   const displayMode = useSelector(state => state.displayMode)
   const [isLoading, setIsLoading] = useState(false)
   const darkTheme = useSelector(state => state.theme)
   const dispatch = useDispatch()

   const handleSearchSubmit = async (e) => {
      e.preventDefault()
      setIsLoading(true)
      const { data } = await axios(API_SEARCH_URL + e.target[0].value)
      setSearchText('')
      const formattedData = formatData(data.description)
      setSearchResult(formattedData)
      setIsLoading(false)
   }


   const handleDisplayModeChange = ({ displayMode, e }) => {
      dispatch(setDisplayMode(displayMode))
      localStorage.setItem('displayMode', displayMode)
      e.currentTarget.classList.add('active')
      e.currentTarget?.nextElementSibling?.classList?.remove('active')
      e.currentTarget?.previousElementSibling?.classList?.remove('active')
   }

   useTheme()

   useEffect(() => {
      const LSdisplayMode = localStorage.getItem('displayMode')
      if (LSdisplayMode) {
         dispatch(setDisplayMode(LSdisplayMode))
      }
   }, [])

   return (
      <div className={darkTheme ? 'theme-dark' : 'theme-light'} >
         <div id='wrapper'>
            <div className='search'>
               <div className='controls'>
                  <form onSubmit={(e) => handleSearchSubmit(e)} >
                     <input type='text' name='search' id='search' value={searchText} onChange={(e) => setSearchText(e.target.value)} /><button><i className='bi-search'></i></button>
                  </form>
               </div>
               <div className='settings'>
                  <MovieCardsControls handleDisplayModeChange={handleDisplayModeChange} />
                  <ThemeControls />
               </div>
               {
                  isLoading ?
                     <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                     </div>
                     :
                     <div className='container'>
                        <div className='row'>
                           {
                              searchResult.map((movie) =>
                                 <MovieCard
                                    {...movie}
                                    key={movie.IMDB_ID}
                                    className={displayMode === displayModes.list ? 'col-lg-12' : 'col-lg-4'}
                                 />)
                           }
                        </div>
                     </div>
               }
            </div>
         </div>
      </div>
   )
}

export default App
