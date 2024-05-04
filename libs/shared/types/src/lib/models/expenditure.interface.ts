import { Expenditure, UserDebt, UserPayment } from '@prisma/client'

export type UserDebtModel = UserDebt
export type UserPAymentModel = UserPayment

export type ExpenditureModel = Expenditure & {
  debets: UserDebtModel
  payments: UserPAymentModel
}
