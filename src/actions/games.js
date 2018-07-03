import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_FAILURE,
  FETCH_GAMES_SUCCESS
} from '../constants/games'
import settings from '../../config/settings'

export const fetchGamesRequest = () => {
  return {
    type: FETCH_GAMES_REQUEST
  }
}

export const fetchGamesFailure = error => {
  return {
    type: FETCH_GAMES_FAILURE,
    error
  }
}

export const fetchGamesSuccess = gameData => {
  return {
    type: FETCH_GAMES_SUCCESS,
    gameData
  }
}

export const fetchGames = () => {
  return dispatch => {
    dispatch(fetchGamesRequest())
    fetch(settings.services.games)
      .then(res => res.json())
      .then(gameData => dispatch(fetchGamesSuccess(gameData)))
      .catch(error => dispatch(fetchGamesFailure(error)))
  }
}
