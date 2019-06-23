import React, { useState } from 'react'
import { getUser } from './services/auth'
import Form from './components/Form'

const Main = () => {
  const [ghUsername, setGhUsername] = useState('')
  const user = getUser()
  return (
    <>
      <h1>Your Main App</h1>
      <ul>
        <li>API: {user.api && user.api.apiURL}</li>
        <li>ID: {user.id}</li>
      </ul>
      <hr />
      <Form setGhUsername={setGhUsername} />
      <p>ghUsername: {ghUsername}</p>
    </>
  )
}

export default Main
