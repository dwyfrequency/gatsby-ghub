import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import NavBar from './components/NavBar'
import Profile from './profile'
import Main from './main'
import PrivateRoute from './components/PrivateRoute'
import Login from './login'
// import { Link } from 'gatsby'
// import { getUser, isLoggedIn } from './services/auth'

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

// {user &&
//   user.user_metadata && (
//     <>
//       <h1>Hi {user.user_metadata.full_name}</h1>
//       <p>
//         You are logged in, so check your{' '}
//         <Link to="/app/profile">profile</Link>
//       </p>
//     </>
//   )}
export default App
