import express from 'express';
import morgan from 'morgan';
import routes from './routes/index';
import path from 'path';
import  cors from 'cors';

const app = express();

// settings 
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes); // routes 
//app.use('/',express.static(path.resolve(''))); // serving files

export default app