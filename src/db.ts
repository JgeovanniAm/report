import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const client = `${process.env.URIDATABASE}`;
export const connectDB = async () => {
    const result = await connect(client, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}