import { IErr, IOkayRes } from './const';

export default class Util {

  public okay(responseToClient: any): IOkayRes {
    return {
      response: responseToClient,
      success: true,
    }
  }

  public errors(err: string): IErr {
    return {
      err,
      success: false,
    }
  }

  public handleResponse(res: any, client: any): Response {
    return client.err ? res.status(404).json(client) : res.json(client);
  }
}