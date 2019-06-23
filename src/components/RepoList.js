import React from 'react'
import RepoListItem from './RepoListItem'

const RepoList = ({ title, repos }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {repos.edges.map(({ node: repoDetails }) => (
          <RepoListItem key={repoDetails.id} repoDetails={repoDetails} />
        ))}
      </ul>
    </div>
  )
}

export default RepoList
