// permanent income that itpermanent income that will be deducted from my account //

import { Schema, model } from 'mongoose';

const schema = new Schema({ 
  title: String,
  descript: String,
  type: String,
  $CRC: Number
})

/*setInterval(()=>{
  console.log('se hizo una revicion y un push / cada 15minu')
}, 900000)*/

export default model('incomeByMonth', schema)
