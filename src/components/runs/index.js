import React, { Component } from 'react'
import Spinner from '../commons/Spinner'
import RunsCard from '../runs/RunsCard'

export default class Runs extends Component {
  componentDidMount () {
    const { runsUri } = this.props
    this.props.getRuns(runsUri)
  }

  renderRunsDetail (runsData) {
    const { gameLogo, gameName } = this.props
    return (
      <div className='RunList'>
        {runsData.map(run => (
          <RunsCard
            key={run.id}
            videos={run.videos}
            playerName={run.players}
            time={run.times}
            gameLogo={gameLogo}
            gameName={gameName}
          />
        ))}
      </div>
    )
  }
  render () {
    return (
      <div>
        {this.props.runsData
          ? this.renderRunsDetail(this.props.runsData)
          : <div className='SpinnerWrapper'><Spinner /> </div>}
      </div>
    )
  }
}
