import { connect } from 'mongoose';
import dotenv from 'dotenv';
import { trigger } from './triggers';
dotenv.config();

const client = `${process.env.URIDATABASE}`;
export const connectDB = () => {
    connect(client, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(result => {
        trigger();
    }).catch(err => err);
    console.log('connectDb')
}
