## Make Web Apps with Dynamic and Static Content Using Gatsby

To show the proof of concept, I created a section where I statically render resumes for users based off of their github profile. Then in the App section, I used netlify to sign up/manage users, and Apollo client for on demand gql queries to generate resumes.

[Front End Walk Through Video](https://www.youtube.com/watch?time_continue=161&v=RnFsSSdTYNU)

## Warning

To successfully run this project, you will need a Github API token for the graphql queries and two environment variables files. Also, I have the queries in gatsby-node.js and resume-book.js set to 53 (the number of people in my bootcamp cohort) which is a lot of data. To not overload github, I would recommend switching this to 5.

Create the files below in the root of the project:
* .env.development
* .env.production

The contents will need to look like 
* GITHUB_TOKEN=INSERTYOURAPITOKENHERE
* GATSBY_GITHUB_TOKEN=SAMETOKENASABOVE

Get a [Personal Github API Token](https://github.com/settings/tokens) 

## How to start

You can clone and deploy this sample project with one click, but before you do read the above and make sure to setup the tokens in netlify as well:
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dwyfrequency/gatsby-ghub&stack=cms)

## Credit

Thank you to the [Gatsby](https://twitter.com/gatsbyjs?lang=en) and [@swyx](https://twitter.com/swyx) for the idea and skeleton app. My starter is a fork of https://github.com/sw-yx/jamstack-hackathon-starter which shows how to use Netlify Identity and Netlify Functions with Gatsby. 
