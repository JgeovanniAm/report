import { Request, Response, NextFunction } from 'express';
import Model from '../models/admin';
import UtilClass from '../util/utils';
import bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { IOkayRes } from '../util/const';
import dotenv from 'dotenv';

dotenv.config();
const util = new UtilClass();

const compareCrypt = (userPassword: string, resultDB: any): Promise<boolean> => {
  return bcrypt.compare(userPassword, resultDB.password)
}

const jsw = (itemtosave: any): IOkayRes => (
  util.okay(
    sign({ id: itemtosave._id }, `${process.env.JWT}`, {
      expiresIn: 60 * 60 * 24 // 24h
    })
  )
)

export const signIn = async (req: Request, res: Response): Promise<any> => {
  const { user, password } = req.body;
  const resultFound = await Model.findOne({ user: user });
  let _statusRes; // conditional admin or password correct
  if (resultFound) {
    const verifyPassword = await compareCrypt(password, resultFound);
    _statusRes = (verifyPassword) ? jsw(resultFound) : util.errors('password incorrect!, please check your password');
  } else _statusRes = util.errors('user incorrect!, please check your user');

  util.handleResponse(res, _statusRes)
}


