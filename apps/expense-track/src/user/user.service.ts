import { DataAccessUser } from '@expense-track/nestjs-respositories'
import { UserModel } from '@expense-track/shared-types'
import { Injectable, NotFoundException } from '@nestjs/common'
import * as bcryptjs from 'bcryptjs'
import { Pagination } from '../app/interfaces/pagination.interface'
import { CreateUserInput } from './interfaces/create-user.interface'
import { UpdateUserInput } from './interfaces/update-user.interface'

@Injectable()
export class UserService {
  constructor(private readonly dataAccessUser: DataAccessUser) {}

  async create({ name, email, roles }: CreateUserInput): Promise<UserModel> {
    const tempPassword = 'test'
    const hashedPassword = await bcryptjs.hash(tempPassword, 10)

    return await this.dataAccessUser.createUser({
      name,
      email,
      password: hashedPassword,
      roles: {
        connect: roles.map((role) => ({ code: role })),
      },
    })
  }

  findAll(pagination: Pagination): Promise<UserModel[]> {
    return this.dataAccessUser.getAll({
      ...pagination,
    })
  }

  async findOne(id: number): Promise<UserModel> {
    const user = await this.dataAccessUser.getUnique({
      id,
    })

    if (!user) throw new NotFoundException('User not found')

    return user
  }

  async update(
    id: number,
    { roles, ...others }: UpdateUserInput
  ): Promise<UserModel> {
    await this.findOne(id)

    return await this.dataAccessUser.updateUser({
      data: {
        roles: {
          set: roles.map((role) => ({ code: role })),
        },
        ...others,
      },
      where: {
        id,
      },
    })
  }

  async remove(id: number): Promise<UserModel> {
    await this.findOne(id)

    return await this.dataAccessUser.deleteUser({
      id,
    })
  }
}
