import React from 'react'
import { navigate } from 'gatsby'
import { handleLogin } from './services/auth'

class Login extends React.Component {
  handleSubmit = () => handleLogin(user => navigate(`/app/profile`))
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Log in</h1>
        <button onClick={this.handleSubmit} style={{ width: 100 }}>
          log in
        </button>
      </div>
    )
  }
}

export default Login
