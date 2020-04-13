export  function Topic(value: any) {
  const { allIncome, incomeByMonth } = value
  return function (target: any) {
    console.log(target)
    target.prototype.topic = {
      allIncome,
      incomeByMonth
    }
  }
}

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

export interface IIncome {
  id?: string
  title: string
  descript: string
  type: string
  CRC: string
  date?: Date
}