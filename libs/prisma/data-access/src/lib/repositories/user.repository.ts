import { Prisma, PrismaClient } from '@expense-track/nestjs-prisma-client'
import { UserModel } from '@expense-track/shared-types'

export abstract class UserRepository {
  abstract readonly prisma: PrismaClient

  async getUnique(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<UserModel | null> {
    return this.prisma.user.findUnique({
      include: {
        roles: {
          include: {
            actions: true,
          },
        },
      },
      where: userWhereUniqueInput,
    })
  }

  async getAll(options: {
    skip?: number
    take?: number
    cursor?: Prisma.UserWhereUniqueInput
    where?: Prisma.UserWhereInput
    orderBy?: Prisma.UserOrderByWithRelationInput
  }): Promise<UserModel[]> {
    const { skip, take, cursor, where, orderBy } = options

    return this.prisma.user.findMany({
      include: {
        roles: {
          include: {
            actions: true,
          },
        },
      },
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async createUser(data: Prisma.UserCreateInput): Promise<UserModel> {
    return this.prisma.user.create({
      include: {
        roles: {
          include: {
            actions: true,
          },
        },
      },
      data,
    })
  }

  async updateUser(options: {
    where: Prisma.UserWhereUniqueInput
    data: Prisma.UserUpdateInput
  }): Promise<UserModel> {
    const { where, data } = options
    return this.prisma.user.update({
      include: {
        roles: {
          include: {
            actions: true,
          },
        },
      },
      data,
      where,
    })
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<UserModel> {
    return this.prisma.user.delete({
      include: {
        roles: {
          include: {
            actions: true,
          },
        },
      },
      where,
    })
  }
}
