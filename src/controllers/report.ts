import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import Util from '../util/utils';

const util = new Util();

export const JWT = (req: Request, res: Response, next: NextFunction) => {
  /*const token: any = req.headers['report-access-token'];
  if (!token) util.handleResponse(res, util.errors('not token'));*/
  // verify token 
  verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOTEyMDY1NmNhZWU3Yzg2ODYzNmExYyIsImlhdCI6MTU4Njc1MTE2MCwiZXhwIjoxNTg2ODM3NTYwfQ.djdatvi5H94H_Z3JTaaTTlGNQJlJgnNU9xdmqmvKlz8', 'geovanni17107801', (err: any, result: any) => {
    if (err) util.handleResponse(res, util.errors('incorrect token'));
    else next();
  });
}