look at https://ghuser.io/

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
