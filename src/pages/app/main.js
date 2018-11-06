import React from 'react'
import { getUser } from './services/auth'

const Main = () => (
  <>
    <h1>Your Main App</h1>
    <ul>
      <li>API: {getUser().api.apiURL}</li>
      <li>ID: {getUser().id}</li>
    </ul>
  </>
)

export default Main
