import React from 'react'
import GameItem from './GameItem'
import Spinner from '../commons/Spinner'
import './small.scss'

export default class Games extends React.Component {
  componentDidMount () {
    this.props.getGames()
  }

  onNavigateToGamesItem = (e, idGame) => {
    this.props.history.push(this.props.runsUrl.replace(':id', idGame))
  }
  renderGamesItem (games) {
    return (
      <div className='GameList'>
        {games.map(game => (
          <GameItem
            key={game.id}
            logo={game.assets['cover-large'].uri}
            name={game.names.international}
            onPress={e => this.onNavigateToGamesItem(e, game.id)}
          />
        ))}
      </div>
    )
  }
  render () {
    return (
      <div>
        {this.props.games
          ? this.renderGamesItem(this.props.games)
          : <div className='SpinnerWrapper'><Spinner /> </div>}
      </div>
    )
  }
}
