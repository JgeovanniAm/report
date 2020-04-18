import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema/index';
import utilInstance from '../util/utils';

import dotenv from 'dotenv';
dotenv.config();

const Util = new utilInstance();

export default new ApolloServer({
  schema: schema,
  introspection: true,
})

