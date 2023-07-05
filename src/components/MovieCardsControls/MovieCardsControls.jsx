import './MovieCardsControls.scss'
import { displayModes } from '../../constants/display-modes'

function MovieCardsControls({ handleDisplayModeChange }) {
  return (
    <div>
      <button onClick={() => handleDisplayModeChange(displayModes.list)}><i className='bi-list-ul'></i></button>
      <button onClick={() => handleDisplayModeChange(displayModes.table)}><i className='bi-table'></i></button>
    </div>
  )
}

export default MovieCardsControls