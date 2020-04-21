import { Schema, model } from 'mongoose';

const schema = new Schema({ 
  title: String,
  descript: String,
  type: String,
  CRC: String,
  date: Date,
  month: Number
})

export default model('allPermanentIncome', schema)