import './MovieCardsControls.scss'
import { displayModes } from '../../constants/display-modes'
import { useSelector } from 'react-redux'

function MovieCardsControls({ handleDisplayModeChange }) {
  const displayMode = useSelector(state => state.displayMode)

  return (
    <div>
      <button className={`btn btn-secondary m-2 ${displayMode === displayModes.list ? 'active' : ''}`} onClick={(e) => handleDisplayModeChange({ displayMode: displayModes.list, e })}>
        <i className='bi-list-ul'></i>
      </button>
      <button className={`btn btn-secondary m-2 ${displayMode === displayModes.table ? 'active' : ''}`} onClick={(e) => handleDisplayModeChange({ displayMode: displayModes.table, e })}>
        <i className='bi-table'></i>
      </button>
    </div>
  )
}

export default MovieCardsControls