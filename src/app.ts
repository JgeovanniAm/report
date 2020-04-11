import express from 'express';
import morgan from 'morgan';
import routes from './routes/index';
import  cors from 'cors';
import apolloServer from './grapql/';
import bodyParser from 'body-parser';
import {JWT} from './controllers/report';

const app = express();

// settings 
app.set('port', process.env.PORT || 3000);
// middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/api', routes); // routes 
app.use('/reportgl', JWT )

apolloServer.applyMiddleware({ app, path: '/reportgl' });

export default app