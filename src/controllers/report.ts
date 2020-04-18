import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import Util from '../util/utils';

const util = new Util();

export const JWT = (req: Request, res: Response, next: NextFunction) => {
  const token: any = req.headers['report-access-token'];
  if (!token) util.handleResponse(res, util.errors('not token'));
  verify(token, 'geovanni17107801', (err: any, result: any) => {
    if (err) util.handleResponse(res, util.errors('incorrect token'));
    else next();
  });
}