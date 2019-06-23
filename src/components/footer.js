import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdStar } from 'react-icons/md'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Link = styled.a`
  color: inherit;
  font-weight: bold;
  transition: 175ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  text-decoration: none;
  font-size: 14;
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
  console.log(data.github)
  const { name, url, stargazers } = data.github.repository
  console.log(name, url, stargazers)
  return (
    <div style={{ marginTop: 'auto' }}>
      Footer
      <Link href={url} rel="noopener noreferrer" target="_blank">
        <FaGithub
          size={16}
          css={{
            marginRight: '0.5rem',
            verticalAlign: 'sub',
          }}
        />
      </Link>
      <Link
        href={`${url}/stargazers`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <strong css={{ fontWeight: 'normal', marginRight: 2 }}>
          {stargazers.totalCount}
        </strong>
        <MdStar css={{ verticalAlign: 'sub' }} size={16} />
      </Link>
      <span>Source on Github</span>
    </div>
  )
}

export default Footer
