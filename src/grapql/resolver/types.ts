import { IResolvers } from 'graphql-tools' //response to my querys
import Model_allIncome from '../../models/income-by-m';
import ModelExp from '../../models/expence';
import moment from 'moment';

async function filtered(result: any, parent: Date) {
  return await result.filter((item: any) => moment(parent).format('MMM,YY') === moment(item.date).format('MMM,YY'));
}

export const type: IResolvers = {
  Months: {
    expenses: async (parent: Date): Promise<{}> => { // parent is my query info
      const result = await ModelExp.find();
      return filtered(result, parent);
    },
    incomes: async (parent: Date): Promise<{}> => { // parent is my query info
      const result = await Model_allIncome.find();
      return filtered(result, parent);
    },
  },
}