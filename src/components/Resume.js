import React from 'react'
import Layout from './layout'
import { graphql, useStaticQuery } from 'gatsby'
import RepoList from './RepoList'

const query = graphql`
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
                name
                websiteUrl
                pinnedItems(first: 6) {
                  totalCount
                  edges {
                    node {
                      ... on GitHub_Repository {
                        id
                        name
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
  const data = useStaticQuery(query)
  const {
    avatarUrl,
    bio,
    pinnedItems,
    contributionsCollection: { totalCommitContributions },
    email,
    login,
    name,
    location,
    repositories,
    repositoriesContributedTo,
  } = data.github.organization.team.members.edges[0].node
  console.log(avatarUrl)
  return (
    <>
      <h2>Resume</h2>
      {/* <img src={avatarUrl} alt="avatar image" /> */}
      <h2>{name}</h2>
      <h3>{login}</h3>
      <p>{bio || 'Software Engineer'}</p>
      <p>total commits: {totalCommitContributions}</p>
      <hr />
      {location || 'New York'}
      {email || 'userhasnoemail@me.com'}
      <hr />
      <RepoList title="Contributed to" repos={repositoriesContributedTo} />
      <hr />
      <h3>Personal Repos</h3>
    </>
  )
}

export default Resume
