import React from 'react'
import './small.scss'

const RunsCard = ({ videos, playerName, time, gameLogo, gameName }) => {
  let name, video
  if (typeof playerName !== 'undefined') {
    name = playerName.hasOwnProperty('names')
      ? playerName.names.international
      : playerName.name
  }

  video = videos ? videos.links[0].uri : '#'

  return (
    <div className='Run'>
      <h3>{name}</h3>
      <a className='Run__link' target='_blank' href={video}>
        Ver video
      </a>
      <p>{time.primary}</p>
      <img className='Run__image' src={gameLogo} alt='' />
      <p>{gameName}</p>
    </div>
  )
}

export default RunsCard
