import { useEffect, useState } from 'react'
import { API_SEARCH_URL } from './constants/api-urls'
import './App.scss'
import { formatData } from './helpers/format-data'
import MovieCard from './components/MovieCard/MovieCard'
import MovieCardsControls from './components/MovieCardsControls/MovieCardsControls'
import { displayModes } from './constants/display-modes'
import axios from 'axios'

function App() {
   const [searchText, setSearchText] = useState('')
   const [searchResult, setSearchResult] = useState([])
   const [displayMode, setDisplayMode] = useState(displayModes.list)
   const [isLoading, setIsLoading] = useState(false)

   const handleSearchSubmit = async (e) => {
      e.preventDefault()
      setIsLoading(true)
      const { data } = await axios(API_SEARCH_URL + e.target[0].value)
      setSearchText('')
      const formattedData = formatData(data.description)
      setSearchResult(formattedData)
      setIsLoading(false)
   }

   const handleDisplayModeChange = (displayMode) => {
      setDisplayMode(displayMode)
      localStorage.setItem('displayMode', displayMode)
   }

   useEffect(() => {
      const LSdisplayMode = localStorage.getItem('displayMode')
      if (LSdisplayMode) {
         setDisplayMode(LSdisplayMode)
      }
   }, [])

   return (
      <>
         <div className='search'>
            <div className='controls'>
               <form onSubmit={(e) => handleSearchSubmit(e)} >
                  <input type='text' name='search' id='search' value={searchText} onChange={(e) => setSearchText(e.target.value)} /><button><i className='bi-search'></i></button>
               </form>
            </div>
            <MovieCardsControls handleDisplayModeChange={handleDisplayModeChange} />
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
      </>
   )
}

export default App
