import { Prisma, PrismaService } from '@expense-track/prisma-client'
import { ActionModel } from '@expense-track/types'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DataAccessActionService {
  constructor(private prisma: PrismaService) {}

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
