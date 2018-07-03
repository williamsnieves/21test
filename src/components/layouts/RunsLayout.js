import React from 'react'
import Runs from '../../containers/Runs'
import ErrorBoundary from '../error/error'

export default class RunsLayout extends React.Component {
  render () {
    const { match } = this.props
    return <ErrorBoundary><Runs idGame={match.params.id} /></ErrorBoundary>
  }
}
