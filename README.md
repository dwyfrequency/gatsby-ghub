look at https://ghuser.io/
https://www.robinwieruch.de/getting-started-github-graphql-api/

```
query($username: String!){
  github {
    user(login: $username) {
    	avatarUrl
      bio
      location
      email
      websiteUrl
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
      starredRepositories {
        totalCount
      }
      repositoriesContributedTo(first: 5) {
        totalCount
    		edges {
          node {
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
          }
        }

      }
    }
  }
}

# query{
#   github {
#     user(login: "dwyfrequency") {
#       bio
#     }
#   }
# }
```

```
query {
  github {
    organization(login: "FullstackAcademy") {
      team(slug: "1904-fsa-ny") {
        members(first: 5) {
          edges {
            node {
              avatarUrl
              bio
              location
              email
              login
              websiteUrl
              contributionsCollection {
                totalCommitContributions
              }
							repositories(last: 5) {
                edges {
                  node {
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
                  }
                }
              }
              repositoriesContributedTo(last: 5) {
                totalCount
                edges {
                  node {
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
```
