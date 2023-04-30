import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_ENDPOINT = "https://profound-marmot-29.hasura.app/v1/graphql";

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default client;
