import { makeExecutableSchema } from 'graphql-tools' //response to my querys
import { GraphQLSchema } from 'graphql';
import 'graphql-import-node';
import { resolve } from "../resolver/resolve-map";
import typeQuery from "./schema.graphql";

export const schema: GraphQLSchema = makeExecutableSchema({ // connect my typeDef and resolvers how a schema
    typeDefs: typeQuery,
    resolvers: resolve,
    resolverValidationOptions: {
        requireResolversForResolveType: false,
    }
})