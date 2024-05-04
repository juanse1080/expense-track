import { ActionModel } from '@expense-track/shared/types'
import { Prisma, PrismaClient } from '@prisma/client'

export class ActionRepository {
  constructor(protected prisma: PrismaClient) {}

  async getUnique(
    userWhereUniqueInput: Prisma.ActionWhereUniqueInput
  ): Promise<ActionModel | null> {
    return this.prisma.action.findUnique({
      where: userWhereUniqueInput,
    })
  }

  async getAll(options: {
    skip?: number
    take?: number
    cursor?: Prisma.ActionWhereUniqueInput
    where?: Prisma.ActionWhereInput
    orderBy?: Prisma.ActionOrderByWithRelationInput
  }): Promise<ActionModel[]> {
    const { skip, take, cursor, where, orderBy } = options

    return this.prisma.action.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async createAction(data: Prisma.ActionCreateInput): Promise<ActionModel> {
    return this.prisma.action.create({
      data,
    })
  }

  async updateAction(options: {
    where: Prisma.ActionWhereUniqueInput
    data: Prisma.ActionUpdateInput
  }): Promise<ActionModel> {
    const { where, data } = options
    return this.prisma.action.update({
      data,
      where,
    })
  }

  async deleteAction(
    where: Prisma.ActionWhereUniqueInput
  ): Promise<ActionModel> {
    return this.prisma.action.delete({
      where,
    })
  }
}
