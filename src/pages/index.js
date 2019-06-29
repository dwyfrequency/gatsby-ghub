import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h2>Static Content Lives Here</h2>
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
          <br />
        </div>
      </div>
    </Layout>
  )
}
