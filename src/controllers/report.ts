import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
import Util from '../util/utils';

dotenv.config();

export const JWT = (req: Request, res: Response, next: NextFunction) => {
  const token: any = req.headers['report-access-token'];
  if (!token) Util.handleResponse(res, Util.errors('not token'));
  // verify token 
  verify(token, `${process.env.JWT}`, (err: any, result: any) => {
    if (err) Util.handleResponse(res, Util.errors('incorrect token'));
    else next();
  });
}