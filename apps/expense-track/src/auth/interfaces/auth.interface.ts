import { User } from '@expense-track/prisma-client';

export interface AuthUser extends Omit<User, 'password' | 'roles'> {
  token: string;
  actions: string[];
}
