import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

class IndexPage extends React.Component {
  state = { loading: false, msg: 'click the button and watch this!' }
  handleClick = e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site with Netlify functions</p>
        <button onClick={this.handleClick}>
          {loading ? 'Loading...' : 'Call Lambda Function'}
        </button>
        <br />
        <span>Here is the response: {msg}</span>
        <hr />
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        </div>
        <ul>
          <li>
            <Link to="/page-2/">Go to page 2</Link>
          </li>
          <li>
            <Link to="/app/">Go to App (with Authentication)</Link>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default IndexPage
