import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_USER = gql`
  {
    user(login: "dwyfrequency") {
      login
    }
  }
`
