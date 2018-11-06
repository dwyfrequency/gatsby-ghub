import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import Profile from '../profile'
import PrivateRoute from './components/PrivateRoute'
import Login from '../login'

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
