import React from 'react'
import RepoListItem from './RepoListItem'
import styled from 'styled-components'

const ListContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
`

const RepoList = ({ title, repos }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ListContainer>
        {repos.edges.map(({ node: repoDetails }) => (
          <RepoListItem key={repoDetails.id} repoDetails={repoDetails} />
        ))}
      </ListContainer>
    </div>
  )
}

export default RepoList
