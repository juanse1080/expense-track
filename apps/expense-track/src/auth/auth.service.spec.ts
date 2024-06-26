import {
  DataAccessActionService,
  DataAccessModule,
  DataAccessUserService,
} from '@expense-track/data-access'
import { createMock } from '@golevelup/ts-jest'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { Test, TestingModule } from '@nestjs/testing'

import { ActionModel, RoleModel, UserModel } from '@expense-track/types'
import { jwtConstants } from './auth.constants'
import { AuthService } from './auth.service'

describe('AuthService', () => {
  const password = 'test'
  const payload: Omit<UserModel, 'password' | 'roles'> = {
    id: 6,
    name: 'Juan',
    email: 'juanmarcon+20@gmail.com',
    createdAt: new Date('2024-02-13T21:01:57.476Z'),
    updatedAt: new Date('2024-02-13T21:01:57.476Z'),
  }
  const roles: RoleModel[] = [
    {
      id: 1,
      name: 'Admin',
      code: 'ADMIN',
      createdAt: new Date('2024-02-12T19:24:12.949Z'),
      updatedAt: null,
    },
  ]
  const user: Omit<UserModel, 'roles'> = {
    ...payload,
    password: '$2a$10$mpriX.x8Jzvxy0SMYVxbfeXQ4yAKy2p/12qWvG9PzWTRnejND2D86',
  }

  let authService: AuthService
  let jwtService: JwtService
  let dataAccessUserService: DataAccessUserService
  let dataAccessActionService: DataAccessActionService

  beforeEach(async () => {
    jest.clearAllMocks()

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DataAccessModule,
        JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60s' },
        }),
      ],
      providers: [AuthService],
    })
      .useMocker(createMock)
      .compile()

    authService = module.get<AuthService>(AuthService)
    jwtService = module.get<JwtService>(JwtService)
    dataAccessUserService = module.get<DataAccessUserService>(
      DataAccessUserService
    )
    dataAccessActionService = module.get<DataAccessActionService>(
      DataAccessActionService
    )
  })

  it('should be defined', () => {
    expect(authService).toBeDefined()
  })

  it('login', async () => {
    const actions: ActionModel[] = [
      {
        id: 1,
        name: 'Show user',
        code: 'user.show',
        createdAt: new Date('2024-02-12T19:24:12.949Z'),
        updatedAt: null,
      },
    ]

    jest
      .spyOn(dataAccessUserService, 'getUnique')
      .mockResolvedValue({ ...user, roles })
    jest.spyOn(dataAccessActionService, 'getAll').mockResolvedValue(actions)

    const loginResponse = await authService.login({
      email: user.email,
      password,
    })

    const actionsStrings = actions.map(({ code }) => code)

    const token = await jwtService.signAsync({
      ...payload,
      actions: actionsStrings,
    })

    expect(loginResponse).toEqual({
      ...payload,
      token,
      actions: actionsStrings,
    })
  })

  it('register', async () => {
    jest
      .spyOn(dataAccessUserService, 'createUser')
      .mockResolvedValue({ ...user, roles })

    const registerResponse = await authService.register({
      email: user.email,
      name: user.name,
      password,
    })

    expect(registerResponse).toEqual({ ...user, roles })
  })
})
