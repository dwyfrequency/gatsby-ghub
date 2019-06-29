import React from 'react'
import { getUser } from './services/auth'

const Profile = () => {
  const user = getUser()
  return (
    <>
      <h1>Your profile</h1>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <li>E-mail: {user.email}</li>
      </ul>
    </>
  )
}

export default Profile
