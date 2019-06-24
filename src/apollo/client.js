import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
        // by prefixing gatsby it should be available in browser
      },
    })
  },
})
