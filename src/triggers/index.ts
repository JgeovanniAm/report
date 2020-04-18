import { IIncome } from '../util/const';
import { Triggers } from './triggers';
import ModelAllIncome from '../models/all-income';

const triggerClass = new Triggers();

const discountPerMonth = (income:IIncome) => {
  const ModelIncome = new ModelAllIncome(income);
  ModelIncome.save();
}

export const trigger = () => {
  setInterval(() => {
    triggerClass.subscribe(discountPerMonth)
  }, 43200000) //43200000 12h
}