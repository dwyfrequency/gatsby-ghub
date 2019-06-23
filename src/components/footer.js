import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  // const data = useStaticQuery(graphql`
  //   query FooterQuery {
  //     repository(owner: "dwyfrequency", name: "gatsby-ghub") {
  //       id
  //       name
  //       stargazers {
  //         totalCount
  //       }
  //       url
  //     }
  //   }
  // `)
  // console.log(data)

  return (
    <div style={{ marginTop: 'auto' }}>
      Footer
      <FaGithub
        size={16}
        css={{
          marginRight: '0.5rem',
          verticalAlign: 'sub',
        }}
      />
      <span>Source on Github</span>
    </div>
  )
}

export default Footer
