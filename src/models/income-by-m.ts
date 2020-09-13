import { Schema, model } from 'mongoose';

const schema = new Schema({ 
  title: String,
  descript: String,
  type: String,
  CRC: String,
  date: Date,
})

export default model('incomeByMonth', schema)
