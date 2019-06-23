import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Resume2 from '../components/Resume2'

export const query = graphql`
  query($username: String!) {
    github {
      user(login: $username) {
        avatarUrl
        bio
        location
        email
        name
        login
        websiteUrl
        pinnedItems(first: 6) {
          totalCount
          edges {
            node {
              ... on GitHub_Repository {
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
        contributionsCollection {
          totalCommitContributions
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
  }
`

const UserPageGh = ({ data }) => {
  return (
    <Layout>
      <div>UserPageTemplate</div>
      <Resume2 resumeDetails={data} />
    </Layout>
  )
}

export default UserPageGh
