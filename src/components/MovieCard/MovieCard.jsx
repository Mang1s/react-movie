import { Link } from 'react-router-dom'
import './MovieCard.scss'
import { displayModes } from '../../constants/display-modes'
import { useSelector } from 'react-redux'

function MovieCard({ TITLE, IMDB_ID, RANK, ACTORS, AKA, IMG_POSTER, className }) {
   const displayMode = useSelector(state => state.displayMode)
   
   return (
      <Link to={'/movies/' + IMDB_ID} className={'movie-card ' + className}>
         <div>
            <img src={IMG_POSTER} alt={TITLE + ' movie poster'} width={300} />
            <h2>{TITLE}</h2>
            <p>AKA: {AKA}</p>
            {
               displayMode === displayModes.list &&
               (<>
                  <div>IMDB Ranked #{RANK}</div>
                  <div>Featuring: {ACTORS.split('')}</div>
               </>)
            }
         </div>
      </Link>
   )
}

export default MovieCard
