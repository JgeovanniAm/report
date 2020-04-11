export interface IAuth extends Document {
  _id?: string
  user: string,
  password: string,
}
export interface IOkayRes {
  response: any
  success: boolean
}

export interface IErr {
  err: string
  success: boolean
}
