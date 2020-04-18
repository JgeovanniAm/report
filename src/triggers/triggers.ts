import ModelAllIncome from '../models/all-income';
import ModelIncomeBy from '../models/income-by-m';
import { Document } from 'mongoose';
import { IIncome } from '../util/const';

export class Triggers {
  private subscribers: any;

  private deducted(bymonth: Array<IIncome>): void {
    const date = new Date();
    const month = new Date().getMonth();
    
    ModelAllIncome.find().then((allIncome: Document[]) => {
      // there are pendings to pay?
      const thereIsPending = allIncome ? allIncome.filter((item: any) => item.month === month) : [];
      const proxIncome = bymonth.map((item: IIncome) => { // add new properties to new Income
        item = { month, date, ...item._doc }
        delete item._id
        return item
      });
      this.verify(thereIsPending, proxIncome);
    })
  }

  private verify(thereIsPending: any[], proxIncome: IIncome[]): void {
    if (thereIsPending.length <= 0) {
      proxIncome.map((item: IIncome) => {
        this.publish(item)
      })
    }
  }

  public subscribe(callback: (item: IIncome) => void): void {
    this.subscribers = callback;
    ModelIncomeBy.find().then((resultBy: any) => {
      resultBy.length > 0 && this.deducted(resultBy);
    })
  }

  private publish(income: IIncome): void {
    this.subscribers(income)
  }
}
