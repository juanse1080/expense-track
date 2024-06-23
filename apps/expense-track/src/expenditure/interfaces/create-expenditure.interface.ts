export interface CreateExpenditureInput {
  title: string
  description: string
  date: Date
  debets: CreateUserExpenditureInput[]
  payments: CreateUserPaymentInput[]
}

export interface CreateUserExpenditureInput {
  userId: number
  cant: number
}

export interface CreateUserPaymentInput {
  userId: number
  cant: number
}
