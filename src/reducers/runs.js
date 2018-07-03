import {
  FETCH_RUNS_REQUEST,
  FETCH_RUNS_FAILURE,
  FETCH_RUNS_SUCCESS
} from '../constants/runs'

const initialState = {
  isLoading: false,
  error: null,
  data: null
}

export const runs = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RUNS_REQUEST:
      return { ...state, isLoading: true }
    case FETCH_RUNS_FAILURE:
      return { ...state, isLoading: false, error: action.error }
    case FETCH_RUNS_SUCCESS:
      return { ...state, isLoading: false, data: action.runsData }
    default:
      return state
  }
}
