import React from 'react'

const RepoListItem = ({ repoDetails }) => {
  const {
    url,
    name,
    primaryLanguage,
    stargazers: { totalCount },
  } = repoDetails
  console.log(primaryLanguage)
  return (
    <div>
      repo details
      <p>
        <a href={url}>{name}</a>
      </p>
      <p>{primaryLanguage ? primaryLanguage.name : 'JavaScript'}</p>
      <p>stars: {totalCount}</p>
    </div>
  )
}

export default RepoListItem
