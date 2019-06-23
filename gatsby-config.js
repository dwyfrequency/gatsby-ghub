var proxy = require('http-proxy-middleware')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: 'Gatsby GHub',
    description: `Kick off your next, great Gatsby app.`,
    author: `@dwy`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-playground`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        // Url to query from
        url: 'https://api.github.com/graphql',
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    // not working
    // {
    //   resolve: `gatsby-plugin-remote-images`,
    //   options: {
    //     // The node type that has the images you want to grab.
    //     // This is generally the camelcased version of the word
    //     // after the 'all' in GraphQL ie. allMyImages type is myImages
    //     nodeType: 'github',
    //     // String that is path to the image you want to use, relative to the node.
    //     // This uses lodash .get, see docs for accepted formats [here](https://lodash.com/docs/4.17.11#get).
    //     imagePath: 'avatarUrl',
    //     // ** ALL OPTIONAL BELOW HERE: **
    //     //Name you want to give new image field on the node.
    //     // Defaults to 'localImage'.
    //     name: 'avatarImage',
    //     // Adds htaccess authentication to the download request if passed in.
    //     // auth: { htaccess_user: `USER`, htaccess_pass: `PASSWORD` },
    //     // Sets the file extension. Useful for APIs that separate the image file path
    //     // from its extension. Or for changing the extention.  Defaults to existing
    //     // file extension.
    //     // ext: '.jpg',
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
