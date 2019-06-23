import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import './layout.css'
import Footer from './footer'
import { graphql, useStaticQuery } from 'gatsby'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
