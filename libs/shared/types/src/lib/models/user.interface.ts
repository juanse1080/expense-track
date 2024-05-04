import { User as UserPrisma } from '@prisma/client'
import { RoleModel } from './role.interface'

export type UserModel = UserPrisma & {
  roles: RoleModel[]
}
