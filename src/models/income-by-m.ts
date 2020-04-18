// permanent income that itpermanent income that will be deducted from my account //

import { Schema, model } from 'mongoose';

const schema = new Schema({ 
  title: String,
  descript: String,
  type: String,
  CRC: String
})


export default model('incomeByMonth', schema)
