import { makeExecutableSchema } from 'graphql-tools' //response to my querys
import { GraphQLSchema } from 'graphql';
import { resolve } from "../resolver/resolve-map";

const typeQuery = `
scalar DateT
type Query {
    incomeByMonths: [IncomeByMonth!]!
    expenses: [Expenses!]!
    allIncomes: [AllIncomes!]!
    expensesID(id: String): Expenses!
    allIncomesID(id: String): AllIncomes!
    statusMonth(date: DateT): Months!
}

type Mutation {
    newIncomeByMonth( income: IncomeByMonthinput! ): IncomeByMonth!
    deleteIncomeByMonth( income: deleteIncomeByMonth! ): IncomeByMonth!
    newExpense( expense: ExpenseInput! ): Expenses!
    deleteExpense( expense: deleteExpenseinput! ): Expenses!
}

input IncomeByMonthinput {
    title: String!
    descript: String!
    type: String!
    CRC: String!
    date: DateT!
}

input deleteIncomeByMonth {
    _id: String!
    date: DateT
    title: String!
    descript: String!
    type: String!
    CRC: String!
}

input ExpenseInput {
    title: String!
    descript: String!
    type: String!
    CRC: String!
    date: DateT!
}

input deleteExpenseinput {
    _id: String!
    date: DateT!
    title: String!
    descript: String!
    type: String!
    CRC: String!
}

type IncomeByMonth {
    _id: String!
    title: String!
    descript: String!
    type: String!
    CRC: String!
    date: DateT
}

type AllIncomes {
    _id: String!
    title: String!
    descript: String!
    type: String!
    CRC: String!
    date: DateT
}

type Expenses {
    _id: String!
    title: String!
    descript: String!
    type: String!
    CRC: String!
    date: DateT
}

type Months {
    incomes: [IncomeByMonth!]!
    expenses: [Expenses!]!
}
`


export const schema: GraphQLSchema = makeExecutableSchema({ // connect my typeDef and resolvers how a schema
    typeDefs: typeQuery,
    resolvers: resolve,
})