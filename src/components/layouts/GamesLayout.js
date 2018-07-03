import React from 'react'
import Games from '../../containers/Games'

export default class GamesLayout extends React.Component {
  render () {
    const { history } = this.props
    return <Games history={history} />
  }
}
