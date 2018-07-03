import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_FAILURE,
  FETCH_GAMES_SUCCESS
} from '../constants/games'

const initialState = {
  isLoading: false,
  error: null,
  data: null
}

export const games = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES_REQUEST:
      return { ...state, isLoading: true }
    case FETCH_GAMES_FAILURE:
      return { ...state, isLoading: false, error: action.error }
    case FETCH_GAMES_SUCCESS:
      return { ...state, isLoading: false, data: action.gameData.data }
    default:
      return state
  }
}
