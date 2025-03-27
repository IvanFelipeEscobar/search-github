import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((err) =>
      console.error(
        `[graphQL error]: Message: ${err.message}, Location ${err.locations}, Path: ${err.path}`
      )
    )
  }
  if (networkError) console.error(`[Network Error]: ${networkError}`)
})

const uri = 'https://api.github.com/graphql'

const httpLink = new HttpLink({
  uri,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
})

const link = ApolloLink.from([errorLink, httpLink])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export default client
