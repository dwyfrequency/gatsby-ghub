import React from 'react'
import { FaGithub } from 'react-icons/fa'
import RepoList from './RepoList'
import styled from 'styled-components'

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

const Resume2 = ({ resumeDetails }) => {
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
  } = resumeDetails
  console.log('repo', repositories)
  console.log('pinned', pinnedItems)
  console.log('repositoriesContributedTo', repositoriesContributedTo)
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

export default Resume2
