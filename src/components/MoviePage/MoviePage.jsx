import { useEffect, useState } from 'react'
import { API_DETAILS_URL } from '../../constants/api-urls'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useTheme } from '../../hooks/useTheme'

function MoviePage() {
   const { movieId } = useParams()
   const [movieData, setMovieData] = useState({
      actor: [{ url: '123', name: 'test' }],
      aggregateRating: { ratingValue: 0, ratingCount: 0 },
      genre: [],
      duration: ''
   })
   const [isLoading, setIsLoading] = useState(false)

   const darkTheme = useSelector(state => state.theme)

   useTheme()

   useEffect(() => {
      setIsLoading(true)
      const fetchData = async () => {
         const { data } = await axios(API_DETAILS_URL + movieId)
         setMovieData(data.short)
      }

      fetchData().catch(e => console.error(e)).finally(() => setIsLoading(false))
   }, [])

   return (
      <div className={darkTheme ? 'theme-dark' : 'theme-light'}>
         <div id='wrapper'>
            {
               isLoading ?
                  <div className="spinner-border" role="status">
                     <span className="visually-hidden">Loading...</span>
                  </div> :
                  <>
                     <Link to='/movies'>
                        <i className='bi-arrow-left'></i>
                     </Link>
                     <img src={movieData.image} alt={movieData.name + ' movie image'} width={300} />
                     <div>{'Description: ' + movieData.description}</div>
                     <div>
                        Actors:
                        {
                           movieData.actor.map(el => <a style={{ display: 'block' }} key={el.url.match(/[0-9]/g).join('')} href={el.url}>{el.name}</a>)
                        }
                     </div>
                     <div>
                        Rating:
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={movieData.aggregateRating.ratingValue} aria-valuemin="0" aria-valuemax="10">
                           <div className="progress-bar" style={{ width: movieData.aggregateRating.ratingValue * 10 + '%' }}>{movieData.aggregateRating.ratingValue * 10 + '%'}</div>
                        </div> / {movieData.aggregateRating.ratingCount} Votes
                     </div>
                     <div>Genres: {movieData.genre.join(', ')}</div>
                     <div>Duration: {movieData.duration.replace('PT', '')}</div>
                  </>
            }
         </div>
      </div>
   )
}

export default MoviePage