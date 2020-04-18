import { IResolvers } from 'graphql-tools' //response to my querys
import { mutation } from './mutation';
import { querys } from './querys';
import { type } from './types';

// my operations to resolve
export const resolve: IResolvers = {
    ...mutation,
    ...querys,
    ...type
}