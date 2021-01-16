import app from './app';
import { connectDB } from './db';

(async () => {
	await  connectDB();
    app.listen(5000);
    console.log('server localhost:3000');
})();