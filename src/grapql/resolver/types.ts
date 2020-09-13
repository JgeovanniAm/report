import { IResolvers } from 'graphql-tools' //response to my querys
import { IIncome, IExpences } from '../../util/const';
import Model_allIncome from '../../models/income-by-m';
import ModelExp from '../../models/expence';
import moment from 'moment';

async function filtered(result: any, parent: Date): Promise<Array<IIncome | IExpences>> {
  return await result.filter((item: any) => moment(parent).format('MMM,YY') === moment(item.date).format('MMM,YY'));
}

export const type: IResolvers = {
  Months: {
    expenses: async (parent: Date): Promise<Array<IExpences>> => { // parent is my query info
      const result = await ModelExp.find();
      return await filtered(result, parent);
    },
    incomes: async (parent: Date): Promise<Array<IIncome>> => { // parent is my query info
      const result = await Model_allIncome.find();
      return await filtered(result, parent);
    },
  },
}