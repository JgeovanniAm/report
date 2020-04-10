import app from './app';
import { connectDB } from './db';

app.listen(app.get('port'), () => {
    connectDB();
    console.log('server localhost:4000');
});