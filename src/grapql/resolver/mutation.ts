import { IResolvers } from 'graphql-tools' //response to my querys
import Model from '../../models/income-by-m';
import ModelExp from '../../models/expence';
import { IIncome, IExpences } from '../../util/const';
import Util from '../../util/utils';

export const mutation: IResolvers = { // my operations to resolve
  Mutation: {
    async newIncomeByMonth(_: void, { income }): Promise<IIncome> {
      if (income) new Model(income).save();
      else income = Util.graphqlNullItem();
      return await income;
    },

    async deleteIncomeByMonth(_: void, { income }): Promise<IIncome | {}> {
      const result = await Model.findOneAndDelete({ _id: income._id });
      return result ? result : Util.graphqlNullItem();
    },

    async newExpense(_: void, { expense }): Promise<IExpences> {
      if (expense) new ModelExp(expense).save();
      else expense = Util.graphqlNullItem();
      return await expense
    },

    async deleteExpense(_: void, { expense }): Promise<IExpences | {}> {
      const result = await ModelExp.findOneAndDelete({ _id: expense._id });
      console.log(result, 'hola')
      return result ? result : Util.graphqlNullItem()
    }
  }
}