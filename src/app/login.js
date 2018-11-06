import React from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from './services/auth'

class Login extends React.Component {
  // state = { redirectToReferrer: false }
  handleSubmit = () => {
    handleLogin(user => {
      console.log({ user })
      // this.setState({ redirectToReferrer: true })
      navigate(`/app/profile`)
    })
  }

  render() {
    if (isLoggedIn()) {
      // navigate(`/app/profile`)
    }

    // let { from } = this.props.location.state || { from: { pathname: '/' } }
    // let { redirectToReferrer } = this.state

    // if (redirectToReferrer) return <Redirect to={from} />

    return (
      <>
        <h1>Log in</h1>
        <button
          onClick={() => {
            this.handleSubmit()
            // navigate(`/app/profile`)
          }}
        >
          log in
        </button>
      </>
    )
  }
}

export default Login
