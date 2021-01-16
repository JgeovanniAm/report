import express from 'express';
import morgan from 'morgan';
import routes from './routes/index';
import cors from 'cors';
import apolloServer from './grapql/';
import { JWT } from './controllers/report';

const app = express();

// settings 
app.set('port', process.env.PORT || 5000);
// middlewares
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next()
});

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes); // routes 
app.use('/api/reportgl', JWT)
apolloServer.applyMiddleware({ app, path: '/api/reportgl' }); // error type - upgrade @type/zexpress

export default app