import React, { useState } from 'react'
// import { getUser } from './services/auth'
import Form from './components/Form'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Resume from '../components/Resume'

const GET_USER = gql`
  query($username: String!) {
    user(login: $username) {
      avatarUrl
      bio
      location
      email
      name
      login
      websiteUrl
      contributionsCollection {
        totalCommitContributions
      }
      pinnedItems(first: 6) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              url
              name
              primaryLanguage {
                name
                color
              }
              updatedAt
              owner {
                login
              }
              stargazers {
                totalCount
              }
              forkCount
            }
          }
        }
      }
      repositories(last: 5) {
        edges {
          node {
            id
            url
            name
            primaryLanguage {
              name
              color
            }
            updatedAt
            owner {
              login
            }
            stargazers {
              totalCount
            }
            forkCount
          }
        }
      }
      repositoriesContributedTo(last: 5) {
        totalCount
        edges {
          node {
            id
            url
            name
            primaryLanguage {
              name
              color
            }
            updatedAt
            owner {
              login
            }
            stargazers {
              totalCount
            }
            forkCount
          }
        }
      }
    }
  }
`

const Main = () => {
  const [ghUsername, setGhUsername] = useState('dwyfrequency')
  return (
    <>
      <h1>Non-Static App</h1>
      <hr />
      <Form setGhUsername={setGhUsername} />
      <Query query={GET_USER} variables={{ username: ghUsername }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          return <Resume user={data.user} />
        }}
      </Query>
    </>
  )
}

export default Main
