import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Resume2 from '../components/Resume2'

const UserPageGh = ({ pathContext: { resumeDetails } }) => {
  console.log(resumeDetails)
  return (
    <Layout>
      <div>UserPageTemplate</div>
      <Resume2 resumeDetails={resumeDetails} />
    </Layout>
  )
}

export default UserPageGh
