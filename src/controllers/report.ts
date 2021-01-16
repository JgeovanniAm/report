import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import Util from '../util/utils';

export const JWT = (req: Request, res: Response, next: NextFunction) => {
  const token: any = req.headers['report-access-token'];
  if (!token) Util.handleResponse(res, Util.errors('not token'));
  // verify token 
  verify(token, `${process.env.JWT}`, (err: any) => {
    if (err) Util.handleResponse(res, Util.errors('incorrect token'));
    else next();
  });
}