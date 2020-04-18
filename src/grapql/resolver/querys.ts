import { IResolvers } from 'graphql-tools' //response to my querys
import Model from '../../models/income-by-m';
import Model_allIncome from '../../models/all-income';
import ModelExp from '../../models/expence';
import Util from '../../util/utils';
export const querys: IResolvers = { // my operations to resolve
  Query: {
    async incomeByMonths(): Promise<{}> {
      return await Model.find()
    },

    async expenses(): Promise<{}> {
      return await ModelExp.find()
    },

    async allIncomes(): Promise<{}> {
      return await Model_allIncome.find()
    },

    async expensesID(_: void, { id }): Promise<{}> {
      const item = await ModelExp.findById(id);
      return item ? item : Util.graphqlNullItem()
    },

    async allIncomesID(_: void, { id }): Promise<{}> {
      const item = await Model_allIncome.findById(id);
      return item ? item : Util.graphqlNullItem()
    },
    
    async statusMonth(_: void, { month }): Promise<{}> {
      return month
    },
  }
}