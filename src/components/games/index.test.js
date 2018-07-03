import React from 'react'
import { shallow, mount } from 'enzyme'
import Game from './index'
import GameItem from './GameItem'

describe('Game component test', () => {
  const dummyGameData = [
    {
      id: 1,
      names: {
        international: 'test1'
      },
      assets: {
        'cover-large': {
          uri: 'test.png'
        }
      }
    }
  ]
  const wrapper = mount(<Game getGames={jest.fn()} games={dummyGameData} />)
  it('should mount the component into DOM', () => {
    expect(wrapper.find(Game).length).toBe(1)
  })
  it('should contain GameItem element', () => {
    expect(wrapper.find(GameItem).exists()).toBe(true)
  })
  it('should contain names props', () => {
    expect(wrapper.props().games[0].names.international).toEqual(
      dummyGameData[0].names.international
    )
  })
})
