import ModelAllIncome from '../models/all-income';
import ModelIncomeBy from '../models/income-by-m';

export class Triggers {
  private subscribers: any

  private deducted(bymonth: any):void {
    const date = new Date();
    const month = new Date().getMinutes();
    
    ModelAllIncome.find().then((allIncome: any) => {
      const thereIsPending = allIncome.filter((item: any) => item.month === month);
      const proxIncome = bymonth.map((item: any) => {
        item = { month, date, ...item._doc }
        delete item._id
        return item
      });
      if (thereIsPending.length <= 0) {
        proxIncome.map((item: any) => {
          console.log('hay pendientes')
          this.publish(item)
        })
      } else console.log('ya se hizo rebajo de esto')
    })
  }

  public async subscribe(callback: (item: any) => void) {
    this.subscribers = callback;
     // estos consoles.log la idea es hacer un return de req, and req para mandar mensajes al usuario
    ModelIncomeBy.find().then((resultBy: any) => {
      if (resultBy.length > 0) this.deducted(resultBy);
      else console.log('no hay datos por mes o rebajas a descontar')
    })
  }

  private publish(income: any) {
    this.subscribers(income)
  }
}
