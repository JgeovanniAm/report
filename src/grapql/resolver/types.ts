import { IResolvers } from 'graphql-tools' //response to my querys
import Model_allIncome from '../../models/all-income';
import ModelExp from '../../models/expence';

export const type: IResolvers = {
  Months: {
    expenses: async (parent: number): Promise<{}> => { // parent is my query info
      const result = await ModelExp.find();
      return result.filter((item: any) => item.month === parent)
    },
    incomes: async (parent: number):  Promise<{}> => { // parent is my query info
      const result = await Model_allIncome.find();
      return result.filter((item: any) => item.month === parent)
    },
  },
}