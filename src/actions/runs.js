import {
  FETCH_RUNS_REQUEST,
  FETCH_RUNS_FAILURE,
  FETCH_RUNS_SUCCESS,
  FETCH_RUNS_PLAYERS_REQUEST,
  FETCH_RUNS_PLAYERS_FAILURE,
  FETCH_RUNS_PLAYERS_SUCCESS
} from '../constants/runs'
import settings from '../../config/settings'
import { handlePlayers } from '../helpers/players'

export const fetchRunsRequest = () => {
  return {
    type: FETCH_RUNS_REQUEST
  }
}

export const fetchRunsFailure = error => {
  return {
    type: FETCH_RUNS_FAILURE,
    error
  }
}

export const fetchRunsSuccess = runsData => {
  return {
    type: FETCH_RUNS_SUCCESS,
    runsData
  }
}

export const fetchRuns = runsLink => {
  return dispatch => {
    dispatch(fetchRunsRequest())
    fetch(runsLink)
      .then(res => res.json())
      .then(async runsData => {
        const newRunsData = await handlePlayers(runsData)
        dispatch(fetchRunsSuccess(newRunsData))
      })
      .catch(error => dispatch(fetchRunsFailure(error)))
  }
}
