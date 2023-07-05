import { Link } from 'react-router-dom'
import './MovieCard.scss'

function MovieCard({ TITLE, YEAR, IMDB_ID, RANK, ACTORS, AKA, IMDB_URL, IMG_POSTER, className }) {
   const handleCardClick = () => {

   }

   return (
      <Link to={'/movies/' + IMDB_ID} className={'movie-card ' + className}>
         <div onClick={handleCardClick}>
            <img src={IMG_POSTER} alt={TITLE + ' movie poster'} width={300} />
            <h2>{TITLE}</h2>
            <p>AKA: {AKA}</p>
         </div>
      </Link>
   )
}

export default MovieCard
