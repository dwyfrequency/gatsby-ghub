import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './src/apollo/client'
import { initAuth } from './src/app/services/auth'

export const onClientEntry = () => {
  initAuth()
}

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
