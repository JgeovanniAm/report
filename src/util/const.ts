import * as mongoose from 'mongoose';

export interface IAuth extends mongoose.Document {
  _id: string
  user: string,
  password: string,
}
export interface IOkayRes {
  response: any
  success: boolean
}

export interface IErr {
  err: string
  success: boolean
}

export interface IIncome {
  _id?: string
  _doc?: any
  title: string
  descript: string
  type: string
  CRC: string
  date?: Date
}

export interface IExpences extends IIncome {}