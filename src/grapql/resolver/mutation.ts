import { IResolvers } from 'graphql-tools' //response to my querys
import { IIncome, IExpences } from '../../util/const';
import Model from '../../models/income-by-m';
import ModelExp from '../../models/expence';
import Util from '../../util/utils';
import { Document } from 'mongoose';

export const mutation: IResolvers = { // my operations to resolve
  Mutation: {
    async newIncomeByMonth(_: void, { income }): Promise<IIncome> {
      let result_end = income;
      if (result_end) new Model(result_end).save();
      else result_end = Util.graphqlNullItem();
      return result_end;
    },

    async deleteIncomeByMonth(_: void, { income }): Promise<IIncome | Document> {
      const result = await Model.findOneAndDelete({ _id: income._id });
      return result ? await result : Util.graphqlNullItem();
    },

    async newExpense(_: void, { expense }): Promise<IExpences | Document> {
      if (expense) {
        new ModelExp(expense).save();
        return expense;
      } else {
        return expense = Util.graphqlNullItem();
      };
    },

    async deleteExpense(_: void, { expense }): Promise<IExpences | Document> {
      const result = await ModelExp.findOneAndDelete({ _id: expense._id });
      return result ? await result : Util.graphqlNullItem()
    }
  }
}