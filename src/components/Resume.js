import React from 'react'
import Layout from './layout'
import { graphql, useStaticQuery } from 'gatsby'

const query = `
query {
  github {
    organization(login: "FullstackAcademy") {
      team(slug: "1904-fsa-ny") {
        members(first: 1) {
          edges {
            node {
              avatarUrl
              bio
              location
              email
              login
              websiteUrl
              contributionsCollection {
                totalCommitContributions
              }
							repositories(last: 5) {
                edges {
                  node {
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
                  }
                }
              }
              repositoriesContributedTo(last: 5) {
                totalCount
                edges {
                  node {
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
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`

const Resume = () => {
  return (
    <>
      <h2>Resume</h2>
    </>
  )
}

export default Resume
