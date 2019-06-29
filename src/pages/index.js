import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from '../components/image'

export default () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div>
          <h1>Static Content Lives Here</h1>
          <ul>
            <li>
              This site has statically generated marketing pages like this one
              and <Link to="/resume-book/">page 2.</Link>{' '}
            </li>
            <li>
              It also has a dynamically generated clientside app guarded by
              authentication:
              <ul>
                <li>
                  <Link to="/app/">
                    <b>Go to App (with Netlify Identity)</b>
                  </Link>{' '}
                </li>
              </ul>
            </li>
          </ul>
          <hr />
          <Img />
          <br />
        </div>
      </div>
    </Layout>
  )
}
