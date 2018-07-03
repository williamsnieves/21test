import React, { Component } from 'react'
import './small.scss'

export default class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    this.setState({ hasError: true })
  }

  render () {
    if (this.state.hasError) {
      return (
        <div className='Error'>
          <h1 className='Error__message'>Something went wrong.</h1>
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
          >
            <path d='M16.5 29v0c-6.904 0-12.5-5.596-12.5-12.5s5.596-12.5 12.5-12.5c6.904 0 12.5 5.596 12.5 12.5s-5.596 12.5-12.5 12.5zM16.5 28c6.351 0 11.5-5.149 11.5-11.5s-5.149-11.5-11.5-11.5c-6.351 0-11.5 5.149-11.5 11.5s5.149 11.5 11.5 11.5v0zM16.481 21c-3.481 0-5.481 2-5.481 2v-1c0 0 2-2 5.481-2s5.519 2 5.519 2v1c0 0-2.037-2-5.519-2v0zM20.622 9.967l-0.559 0.829 3.316 2.237 0.559-0.829-3.316-2.237zM9.062 12.204l0.559 0.829 3.316-2.237-0.559-0.829-3.316 2.237zM12 15c0.552 0 1-0.448 1-1s-0.448-1-1-1c-0.552 0-1 0.448-1 1s0.448 1 1 1v0zM21 15c0.552 0 1-0.448 1-1s-0.448-1-1-1c-0.552 0-1 0.448-1 1s0.448 1 1 1v0z' />
          </svg>
          <a className='Error__button' href='/'>go to main page</a>
        </div>
      )
    }
    return this.props.children
  }
}
