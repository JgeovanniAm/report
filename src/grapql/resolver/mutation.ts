import { IResolvers } from 'graphql-tools' //response to my querys
import Model from '../../models/income-by-m';
import { IIncome } from '../../util/const';

export const mutation: IResolvers = { // my operations to resolve
  Mutation: {
    newIncomeByMonth(_: void, { income }): IIncome {
      const ModelIncome = new Model(income);
      ModelIncome.save();
      return income;
    },
    deleteIncomeByMonth(_: void, { income }): IIncome {
      Model.findOneAndDelete({
        _id: income._id
      }).then(data => {
        console.log(data)
      })
      return income;
    }
  }
}