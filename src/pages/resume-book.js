import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Card = styled.div`
  text-align: center;
  width: 175px;
  height: 70px;
  background-color: rgb(34, 17, 51);
  box-shadow: 9px 13px 15px -10px #000000;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem 10px;
`

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  a {
    color: #fff;
    text-decoration: none;
  }
`

export const query = graphql`
  query {
    github {
      organization(login: "FullstackAcademy") {
        team(slug: "1904-fsa-ny") {
          members(first: 53) {
            edges {
              node {
                id
                login
              }
            }
          }
        }
      }
    }
  }
`

const SecondPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Resume Book" />
      <h1>FullStack Resume Book</h1>
      <ListContainer>
        {data.github.organization.team.members.edges.map(({ node }) => (
          <Link to={`/resumes/${node.login}`} key={node.id}>
            <Card>{node.login}</Card>
          </Link>
        ))}
      </ListContainer>
    </Layout>
  )
}

export default SecondPage
