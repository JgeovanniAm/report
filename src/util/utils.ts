import { IErr, IOkayRes, IExpences } from './const';

export default class Util {

  static okay(responseToClient: any): IOkayRes {
    return {
      response: responseToClient,
      success: true,
    }
  }

  static errors(err: string): IErr {
    return {
      err,
      success: false,
    }
  }

  static handleResponse(res: any, client: any): Response {
    return client.err ? res.status(404).json(client) : res.json(client);
  }

  static graphqlNullItem(): IExpences {
    return {
      _id: 'not exist',
      title: 'not exist',
      descript: 'not exist',
      type: 'not exist',
      CRC: 'not exist',
    }
  }
}