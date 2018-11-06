import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import NavBar from './components/NavBar'
import Profile from './profile'
import Main from './main'
import PrivateRoute from './components/PrivateRoute'
import Login from './login'

const App = () => {
  return (
    <Layout>
      <NavBar />
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <PublicRoute path="/app">
          <PrivateRoute path="/" component={Main} />
          <Login path="/login" />
        </PublicRoute>
      </Router>
    </Layout>
  )
}
function PublicRoute(props) {
  return <div>{props.children}</div>
}

export default App
