import React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from '../services/auth'

export default () => {
  const content = { message: '', login: true }
  const user = getUser()
  // console.log(user)
  if (isLoggedIn()) {
    content.message = `Hello, ${user.email}`
  } else {
    content.message = 'You are not logged in'
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        background: '#f1defa',
        padding: '10px',
      }}
    >
      <span>{content.message || 'User'}</span>
      <div>
        <span>Navigate the app: </span>
        <Link to="/app/">Main</Link>
        {` `}
        <Link to="/app/profile">Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Logout
          </a>
        ) : (
          <Link to="/app/login">Login</Link>
        )}
      </div>
    </div>
  )
}
