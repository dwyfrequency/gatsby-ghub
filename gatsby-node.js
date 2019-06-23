/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// note we do use https://www.gatsbyjs.org/packages/gatsby-plugin-create-client-paths/
// for more info read https://www.gatsbyjs.org/docs/authentication-tutorial/#creating-client-only-routes

const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions // const response = await graphql(`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  // const response = await graphql(`
  //   {
  //     github {
  //       organization(login: "FullstackAcademy") {
  //         membersWithRole(first: 1) {
  //           edges {
  //             node {
  //               login
  //             }
  //             cursor
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // const response = await graphql(`
  //   {
  //     github {
  //       user(login: "dwyfrequency") {
  //         login
  //       }
  //     }
  //   }
  // `)

  // console.log('>>>>>>>>>>', response)
  // console.log('>>>>>>>>>>', response.data.github.user.login)

  const { data } = await graphql(`
    query {
      github {
        organization(login: "FullstackAcademy") {
          team(slug: "1904-fsa-ny") {
            members(first: 1) {
              edges {
                node {
                  avatarUrl
                  bio
                  location
                  email
                  login
                  name
                  websiteUrl
                  contributionsCollection {
                    totalCommitContributions
                  }
                  repositories(last: 5) {
                    edges {
                      node {
                        id
                        url
                        name
                        primaryLanguage {
                          name
                          color
                        }
                        updatedAt
                        owner {
                          login
                        }
                        stargazers {
                          totalCount
                        }
                        forkCount
                      }
                    }
                  }
                  repositoriesContributedTo(last: 5) {
                    totalCount
                    edges {
                      node {
                        id
                        url
                        name
                        primaryLanguage {
                          name
                          color
                        }
                        updatedAt
                        owner {
                          login
                        }
                        stargazers {
                          totalCount
                        }
                        forkCount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log('>>>>>>>>>>', data)
  data.github.organization.team.members.edges.forEach(({ node }) =>
    console.log('>>>>>>>>>>', node.login, node.name)
  )

  data.github.organization.team.members.edges.forEach(({ node }) => {
    createPage({
      path: `resumes/${node.login}`,
      component: path.resolve(`./src/templates/UserPageGh.js`),
      context: {
        resumeDetails: node,
      },
    })
  })
}
