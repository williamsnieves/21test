import React from 'react'
import { shallow, mount } from 'enzyme'
import GameItem from './GameItem'

describe('GameItem component test', () => {
  const dummyGameItemData = {
    logo: 'test.jpg',
    name: 'test',
    onPress: jest.fn()
  }
  const wrapper = mount(<GameItem {...dummyGameItemData} />)
  it('should mount the component into DOM', () => {
    expect(wrapper.find(GameItem).length).toBe(1)
  })
  it('should contain names props', () => {
    expect(wrapper.props()).toHaveProperty('name')
  })
})
