import {ApolloClient, createHttpLink} from '@apollo/client';
import {cache} from './cache';

const httpLink = createHttpLink({
  uri: 'http://110.13.55.116:3000/graphql',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: cache,
});
