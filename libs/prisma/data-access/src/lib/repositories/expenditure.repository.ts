import { Prisma, PrismaClient } from '@expense-track/nestjs-prisma-client'
import { ExpenditureModel } from '@expense-track/shared-types'

export abstract class ExpenditureRepository {
  abstract readonly prisma: PrismaClient

  async getUnique(
    expenditureWhereUniqueInput: Prisma.ExpenditureWhereUniqueInput
  ): Promise<ExpenditureModel | null> {
    return this.prisma.expenditure.findUnique({
      include: {
        debets: true,
        payments: true,
      },
      where: expenditureWhereUniqueInput,
    })
  }

  async getAll(options: {
    skip?: number
    take?: number
    cursor?: Prisma.ExpenditureWhereUniqueInput
    where?: Prisma.ExpenditureWhereInput
    orderBy?: Prisma.ExpenditureOrderByWithRelationInput
  }): Promise<ExpenditureModel[]> {
    const { skip, take, cursor, where, orderBy } = options

    return this.prisma.expenditure.findMany({
      include: {
        debets: true,
        payments: true,
      },
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async createExpenditure(
    data: Prisma.ExpenditureCreateInput
  ): Promise<ExpenditureModel> {
    return this.prisma.expenditure.create({
      include: {
        debets: true,
        payments: true,
      },
      data,
    })
  }

  async updateExpenditure(options: {
    where: Prisma.ExpenditureWhereUniqueInput
    data: Prisma.ExpenditureUpdateInput
  }): Promise<ExpenditureModel> {
    const { where, data } = options
    return this.prisma.expenditure.update({
      include: {
        debets: true,
        payments: true,
      },
      data,
      where,
    })
  }

  async deleteExpenditure(
    where: Prisma.ExpenditureWhereUniqueInput
  ): Promise<ExpenditureModel> {
    return this.prisma.expenditure.delete({
      include: {
        debets: true,
        payments: true,
      },
      where,
    })
  }
}
