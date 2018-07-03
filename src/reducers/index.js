import { combineReducers } from 'redux'
import { games } from './games'
import { runs } from './runs'

const appReducers = combineReducers({
  games,
  runs
})

export default appReducers
