import { IResolvers } from 'graphql-tools' //response to my querys
import Model from '../../models/income-by-m';
import ModelExp from '../../models/expence';
import { IIncome, IExpences } from '../../util/const';
import Util from '../../util/utils';

export const mutation: IResolvers = { // my operations to resolve
  Mutation: {
    newIncomeByMonth(_: void, { income }): IIncome {
      if (income) new Model(income).save();
      else income = Util.graphqlNullItem();
      return income;
    },

    async deleteIncomeByMonth(_: void, { income }): Promise< IExpences | {}> {
      const result = await Model.findOneAndDelete({ _id: income._id })
      return result ? result : Util.graphqlNullItem();
    },

    newExpense(_: void, { expense }): IExpences {
      if (expense) new ModelExp(expense).save();
      else expense = Util.graphqlNullItem()
      return expense;
    },

    async deleteExpense(_: void, { expense }): Promise<IExpences | {}> {
      const result = await ModelExp.findOneAndDelete({ _id: expense._id })
      return result ? result : Util.graphqlNullItem()
    }
  }
}