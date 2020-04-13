import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import Model from '../models/admin';
import UtilClass from '../util/utils';
import { sign } from 'jsonwebtoken';
import { IOkayRes } from '../util/const';

dotenv.config();

const util = new UtilClass();

const compareCrypt = (userPassword: string, resultDB: any): Promise<boolean> => {
  return bcrypt.compare(userPassword, resultDB.password)
}

const jsw = (itemtosave: any): IOkayRes => ( // itemToSave - collection of my mongodb
  util.okay( // send result jwt
    sign({ id: itemtosave._id }, `${process.env.JWT}`, {
      expiresIn: 60 * 60 * 24 // 24h
    })
  )
)

export const signIn = async (req: Request, res: Response): Promise<any> => {
  const { user, password } = req.body;
  const resultFound = await Model.findOne({ user: user });
  let _statusRes; // conditional admin or correct password
  
  if (resultFound) {
    const verifyPassword = await compareCrypt(password, resultFound);
    _statusRes = (verifyPassword) ? jsw(resultFound) : util.errors('password incorrect!, please check your password');
  } else _statusRes = util.errors('user incorrect!, please check your user');

  util.handleResponse(res, _statusRes)
}


