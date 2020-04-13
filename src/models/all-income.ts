import { Schema, model } from 'mongoose';

const schema = new Schema({ 
  title: String,
  descript: String,
  type: String,
  $CRC: Number,
  date: Date,
  month: Number
})

/*setInterval(()=>{
  console.log('se hizo una revicion y un push / cada 15minu')
}, 900000)*/

export default model('allPermanentIncome', schema)