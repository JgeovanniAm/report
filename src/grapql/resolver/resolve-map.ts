import { IResolvers } from 'graphql-tools' //response to my querys
import { mutation } from './mutation';

// my operations to resolve
export const resolve: IResolvers = {
    ... mutation,
}