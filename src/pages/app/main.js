import React from 'react'
import { getUser } from './services/auth'

class Main extends React.Component {
  state = { loading: false, json: null }
  handleClick = e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch('/.netlify/functions/auth-hello')
      .then(response => response.json())
      .then(json => this.setState({ loading: false, json }))
  }

  render() {
    const { loading, json } = this.state
    return (
      <>
        <h1>Your Main App</h1>
        <ul>
          <li>API: {getUser().api.apiURL}</li>
          <li>ID: {getUser().id}</li>
        </ul>
        <hr />

        <button onClick={this.handleClick}>
          {loading ? 'Loading...' : 'Call Lambda Function'}
        </button>
        <pre>{JSON.stringify(json)}</pre>
      </>
    )
  }
}

export default Main
