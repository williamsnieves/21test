import { connect } from 'react-redux'
import Games from '../components/games/'
import { fetchGames } from '../actions/games'
import settings from '../../config/settings'

const mapStateToProps = state => {
  const games = state.games.data
  const isLoadingGames = state.games.isLoading
  const runsUrl = settings.routes.runs
  return {
    games,
    isLoadingGames,
    runsUrl
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGames: () => dispatch(fetchGames())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Games)
