import { User } from '@prisma/client'
import { RoleModel } from './role.interface'

export type UserModel = User & {
  roles: RoleModel[]
}
