import { Expenditure, UserDebt, UserPayment } from '@prisma/client'

export type UserDebtModel = UserDebt
export type UserPaymentModel = UserPayment

export type ExpenditureModel = Expenditure & {
  debets: UserDebtModel[]
  payments: UserPaymentModel[]
}
