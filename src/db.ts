import { connect } from 'mongoose';
const client = '';
export const connectDB = async () => {
    await connect(client, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('connectDb')
}
