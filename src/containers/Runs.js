import { connect } from 'react-redux'
import Runs from '../components/runs/'
import { fetchRuns } from '../actions/runs'

const mapStateToProps = (state, ownProps) => {
  const runsFilteredById = state.games.data.filter(
    game => game.id === ownProps.idGame
  )[0]
  const runsLink = runsFilteredById.links.filter(run => run.rel === 'runs')[0]
  const runsData = state.runs.data
  const gameLogo = runsFilteredById.assets['cover-large'].uri
  const gameName = runsFilteredById.names.international

  return {
    runsUri: runsLink.uri,
    runsData,
    gameLogo,
    gameName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRuns: url => dispatch(fetchRuns(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs)
