import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { graphql, StaticQuery } from 'gatsby'

// const query = graphql`
//   query FooterQuery {
//     github {
//       repository(owner: "dwyfrequency", name: "gatsby-ghub") {
//         stargazers {
//           totalCount
//         }
//       }
//     }
//   }
// `

const Footer = () => {
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
