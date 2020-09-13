import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema/index';
import utilInstance from '../util/utils';

const Util = new utilInstance();

export default new ApolloServer({
  schema: schema,
  introspection: true,
  playground: {
    settings: {
      // So that auth works
      // Docs: https://github.com/prisma/graphql-playground
      ['request.credentials']: 'same-origin',
    },
  },
  subscriptions: {path: '/api/reportgl'}
})

