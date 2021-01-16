import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import Model from '../models/admin';
import Util from '../util/utils';
import { sign } from 'jsonwebtoken';
import { IOkayRes } from '../util/const';

const compareCrypt = (userPassword: string, resultDB: any): Promise<boolean> => {
  return bcrypt.compare(userPassword, resultDB.password)
}

const admitAccess = (itemtosave: any): IOkayRes => ( // itemToSave - collection of my mongodb
  Util.okay( // send result jwt
    sign({ id: itemtosave._id }, `${process.env.JWT}`, {
      expiresIn: 60 * 60 * 24 // 24h
    })
  )
)

export const signIn = async (req: Request, res: Response): Promise<void> => {
  const { user, password } = req.body;
  const resultFound = await Model.findOne({ user: user });
  let _statusRes; // conditional admin or correct password

  if (resultFound) {
    const verifyPassword = await compareCrypt(password, resultFound);
    _statusRes = (verifyPassword) ? admitAccess(resultFound) : Util.errors('password incorrect!, please check your password');
  } else _statusRes = Util.errors('user incorrect!, please check your user');
  Util.handleResponse(res, _statusRes); // send response
}


