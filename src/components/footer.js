import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { GoStar } from 'react-icons/go'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Link = styled.a`
  color: inherit;
  font-weight: bold;
  transition: 175ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  text-decoration: none;
  font-size: 14;
  padding: 2px;
  margin: 2px;
  :last-child {
    padding: 12px;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      github {
        repository(owner: "dwyfrequency", name: "gatsby-ghub") {
          id
          name
          stargazers {
            totalCount
          }
          url
        }
      }
    }
  `)

  const { url, stargazers } = data.github.repository

  return (
    <div
      style={{
        marginTop: 'auto',
        padding: '1rem',
        borderTop: '1px solid grey',
      }}
    >
      <Link href={url} rel="noopener noreferrer" target="_blank">
        <FaGithub
          size={16}
          css={{
            marginRight: '0.5rem',
            verticalAlign: 'sub',
          }}
        />
        <span>Source on Github</span>
      </Link>
      <Link
        href={`${url}/stargazers`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <GoStar css={{ verticalAlign: 'sub' }} size={16} />
        <strong css={{ fontWeight: 'normal', marginRight: 2 }}>
          {' '}
          {stargazers.totalCount}
        </strong>
      </Link>
    </div>
  )
}

export default Footer
