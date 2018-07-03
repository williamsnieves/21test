import React from 'react'

const GameItem = ({ logo, name, onPress }) => {
  return (
    <div className='Game' onClick={onPress}>
      <img className='Game__image' src={logo} />
      <p className='Game__name'>{name}</p>
    </div>
  )
}

export default GameItem
