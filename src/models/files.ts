import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
    name: String,
    title: String,
})

export default model<ItaskRequi>('jimyModel', schema)

interface ItaskRequi extends Document {
    name: string,
    title: string,
}
