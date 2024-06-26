import { Prisma, PrismaService } from '@expense-track/prisma-client'
import { RoleModel } from '@expense-track/types'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DataAccessRoleService {
  constructor(private prisma: PrismaService) {}

  async getUnique(
    userWhereUniqueInput: Prisma.RoleWhereUniqueInput
  ): Promise<RoleModel | null> {
    return this.prisma.role.findUnique({
      where: userWhereUniqueInput,
    })
  }

  async getAll(options: {
    skip?: number
    take?: number
    cursor?: Prisma.RoleWhereUniqueInput
    where?: Prisma.RoleWhereInput
    orderBy?: Prisma.RoleOrderByWithRelationInput
  }): Promise<RoleModel[]> {
    const { skip, take, cursor, where, orderBy } = options

    return this.prisma.role.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async createRole(data: Prisma.RoleCreateInput): Promise<RoleModel> {
    return this.prisma.role.create({
      data,
    })
  }

  async updateRole(options: {
    where: Prisma.RoleWhereUniqueInput
    data: Prisma.RoleUpdateInput
  }): Promise<RoleModel> {
    const { where, data } = options
    return this.prisma.role.update({
      data,
      where,
    })
  }

  async deleteRole(where: Prisma.RoleWhereUniqueInput): Promise<RoleModel> {
    return this.prisma.role.delete({
      where,
    })
  }
}
