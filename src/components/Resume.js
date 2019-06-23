import React from 'react'
import Layout from './layout'
import { FaGithub } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'
import RepoList from './RepoList'
import styled from 'styled-components'

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

const Showcase = styled.div`
  /* margin: 0 auto; */
  text-align: center;
  h2 {
    margin-bottom: 4px;
  }
  li {
    list-style: none;
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
  console.log(location)
  return (
    <Showcase>
      <>
        <h2>Resume</h2>
        <img
          src={avatarUrl}
          alt="avatar image"
          style={{ width: 350, height: 350, borderRadius: 6 }}
        />
        <h2>{name}</h2>
        <h3>
          <FaGithub
            size={25}
            css={{
              marginRight: '0.2rem',
              verticalAlign: 'sub',
            }}
          />
          {login}
        </h3>
        <ul>
          <li>Bio: {bio || 'Software Engineer'}</li>
          <li>Total Commits: {totalCommitContributions}</li>
          <hr />
          <ul>
            <li>Location: {location || 'New York'}</li>
            <li>Email: {email || 'userhasnoemail@me.com'}</li>
          </ul>
        </ul>
      </>

      <hr />
      <RepoList title="Contributed to" repos={repositoriesContributedTo} />
      <hr />
      <RepoList
        title="Personal Repos"
        repos={pinnedItems.edges.length ? pinnedItems : repositories}
      />
    </Showcase>
  )
}

export default Resume
