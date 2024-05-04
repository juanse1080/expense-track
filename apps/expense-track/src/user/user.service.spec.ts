import {
  DataAccessModule,
  DataAccessUser,
} from '@expense-track/nestjs/respositories'
import { UserModel } from '@expense-track/shared/types'
import { createMock } from '@golevelup/ts-jest'
import { Test, TestingModule } from '@nestjs/testing'
import * as bcryptjs from 'bcryptjs'
import { UserService } from './user.service'

describe('UserService', () => {
  const password = 'test'
  const user: UserModel = {
    id: 6,
    name: 'Juan',
    email: 'juanmarcon+20@gmail.com',
    createdAt: new Date('2024-02-13T21:01:57.476Z'),
    updatedAt: new Date('2024-02-13T21:01:57.476Z'),
    password: '$2a$10$mpriX.x8Jzvxy0SMYVxbfeXQ4yAKy2p/12qWvG9PzWTRnejND2D86',
    roles: [
      {
        id: 1,
        name: 'Superuser',
        code: 'SUPER',
        createdAt: new Date('2024-02-12T19:24:12.949Z'),
        updatedAt: null,
      },
    ],
  }

  let userService: UserService
  let dataAccessUser: DataAccessUser

  beforeEach(async () => {
    jest.clearAllMocks()

    const module: TestingModule = await Test.createTestingModule({
      imports: [DataAccessModule],
      providers: [UserService],
    })
      .useMocker(createMock)
      .compile()

    userService = module.get<UserService>(UserService)
    dataAccessUser = module.get<DataAccessUser>(DataAccessUser)
  })

  it('should be defined', () => {
    expect(userService).toBeDefined()
  })

  it('create user', async () => {
    jest.spyOn(dataAccessUser, 'createUser').mockResolvedValue(user)

    const userCreated = await userService.create({
      name: user.name,
      email: user.email,
      roles: user.roles.map(({ code }) => code),
    })

    const isPasswordValid = await bcryptjs.compare(
      password,
      userCreated.password
    )

    expect(userCreated).toEqual(user)
    expect(isPasswordValid).toEqual(true)
  })

  it('create user', async () => {
    jest.spyOn(dataAccessUser, 'createUser').mockResolvedValue(user)

    const userCreated = await userService.create({
      name: user.name,
      email: user.email,
      roles: user.roles.map(({ code }) => code),
    })

    const isPasswordValid = await bcryptjs.compare(
      password,
      userCreated.password
    )

    expect(userCreated).toEqual(user)
    expect(isPasswordValid).toEqual(true)
  })

  it('update user', async () => {
    jest.spyOn(dataAccessUser, 'getUnique').mockResolvedValue(user)
    jest.spyOn(dataAccessUser, 'updateUser').mockResolvedValue(user)

    const userUpdated = await userService.update(user.id, {
      name: user.name,
      roles: user.roles.map(({ code }) => code),
    })

    expect(userUpdated).toEqual(user)
  })

  it('find user', async () => {
    jest.spyOn(dataAccessUser, 'getUnique').mockResolvedValue(user)

    const currentUser = await userService.findOne(user.id)
    expect(currentUser).toEqual(user)
  })

  it('find user fail', async () => {
    jest.spyOn(dataAccessUser, 'getUnique').mockResolvedValue(undefined)

    await expect(userService.findOne(user.id)).rejects.toThrow('User not found')
  })

  it('find users', async () => {
    jest.spyOn(dataAccessUser, 'getAll').mockResolvedValue([user])

    const users = await userService.findAll({})
    expect(users).toEqual([user])
  })

  it('remove user', async () => {
    jest.spyOn(dataAccessUser, 'getUnique').mockResolvedValue(user)
    jest.spyOn(dataAccessUser, 'deleteUser').mockResolvedValue(user)

    const removedUser = await userService.remove(user.id)
    expect(removedUser).toEqual(user)
  })
})
