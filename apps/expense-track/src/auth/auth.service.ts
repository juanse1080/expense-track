import {
  DataAccessAction,
  DataAccessUser,
} from '@expense-track/nestjs-respositories'
import { AuthModel, UserModel } from '@expense-track/shared-types'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcryptjs from 'bcryptjs'
import { LoginInput } from './interfaces/login.interface'
import { RegisterInput } from './interfaces/register.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly dataAccessUser: DataAccessUser,
    private readonly dataAccessAction: DataAccessAction,
    private readonly jwtService: JwtService
  ) {}

  async register({ password, email, name }: RegisterInput): Promise<AuthModel> {
    const hashedPassword = await bcryptjs.hash(password, 10)

    const user = await this.dataAccessUser.createUser({
      name,
      email,
      password: hashedPassword,
    })

    return await this.startSession(user)
  }

  async login({ email, password }: LoginInput): Promise<AuthModel> {
    const user = await this.dataAccessUser.getUnique({ email })

    if (!user) throw new UnauthorizedException('Invalid email')

    const isPasswordValid = await bcryptjs.compare(password, user.password)

    if (!isPasswordValid) throw new UnauthorizedException('Invalid password')

    return await this.startSession(user)
  }

  private async getActionsByRoles(roles: string[]): Promise<string[]> {
    const actions = await this.dataAccessAction.getAll({
      where: {
        roles: {
          some: {
            code: {
              in: roles,
            },
          },
        },
      },
    })

    return actions.map(({ code }) => code)
  }

  private async startSession({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    password,
    roles,
    ...payload
  }: UserModel): Promise<AuthModel> {
    const actionsStrings = await this.getActionsByRoles(
      roles.map(({ code }) => code)
    )

    const token = await this.jwtService.signAsync({
      ...payload,
      actions: actionsStrings,
    })

    return {
      ...payload,
      token,
      actions: actionsStrings,
    }
  }
}
