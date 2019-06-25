import React from 'react'
import { FaGithub } from 'react-icons/fa'
import RepoList from './RepoList'
import styled from 'styled-components'

const Showcase = styled.div`
  margin: 10px auto;
  width: 80vw;
  text-align: center;
  background: var(--offWhite);
  border-radius: 3px;
  box-shadow: 2px 3px 8px #eee;

  h2 {
    margin-bottom: 4px;
  }
  li {
    list-style: none;
  }
`

const Resume = ({ user }) => {
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
  } = user
  // console.log('repo', repositories)
  // console.log('pinned', pinnedItems)
  // console.log('repositoriesContributedTo', repositoriesContributedTo)

  return (
    <Showcase>
      <h2>Resume</h2>
      <img
        src={avatarUrl}
        alt="avatar"
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
        <li>Location: {location || 'New York'}</li>
        <li>Email: {email || 'userhasnoemail@me.com'}</li>
      </ul>

      <hr />
      <RepoList title="Contributed to" repos={repositoriesContributedTo} />
      <hr />

      <RepoList
        title="Personal Repos"
        repos={
          pinnedItems && pinnedItems.edges.length ? pinnedItems : repositories
        }
      />
    </Showcase>
  )
}

export default Resume
