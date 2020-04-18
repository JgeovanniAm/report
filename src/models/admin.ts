import { Schema, model } from 'mongoose';

const schema = new Schema({
    user: String,
    password: String,
})

export default model('adminModel', schema,'adminModel')
