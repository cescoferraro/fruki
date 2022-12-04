import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { hydrateRoot } from 'react-dom/client'
import { App } from './app'

const elementById = document.getElementById('root')

const host = window?.location?.host?.includes('localhost')
  ? `http://localhost:3333`
  : 'https://api.fruki.cescoferraro.com'

if (elementById)
  hydrateRoot(
    elementById,
    <ApolloProvider
      client={
        new ApolloClient({
          uri: `${host}/graphql`,
          cache: new InMemoryCache(),
        })
      }
    >
      <App />
    </ApolloProvider>
  )
