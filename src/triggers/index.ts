import { IIncome } from '../util/const';
import { Triggers } from './triggers';
import ModelAllIncome from '../models/all-income';

const triggerClass = new Triggers();

const triggerApp =  async () => {
  triggerClass.subscribe(discountPerMonth)
}

const discountPerMonth = (income:IIncome) => {
  console.log(income, 'desde aafuera');
  const ModelIncome = new ModelAllIncome(income);
  ModelIncome.save();
}

export const trigger = () => {
  setInterval(() => {
    triggerApp()
  }, 3000)
}

  /*setInterval(() => {
    console.log('se hizo una revicion y un push / cada 15minu')
  }, 900000)


  // cuando se haga un push en la base de dtaos de incomebymonth 
  //el va pasar por esta logica de patron medidator y ejecutara apartir de aqui
  // el setinterval y si hay algo en ese array hace un sentinterval si no se detine


  //43200000 12h

  setInterval(() => {
    console.log('se hizo una revicion y un push / cada 1HORA', '<><><><><><><><><><><>')
  }, 3600000)
  
*/