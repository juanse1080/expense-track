import { UserModel } from './user.interface'

export type AuthModel = Omit<UserModel, 'password' | 'roles'> & {
  token: string
  actions: string[]
}
