import { PrismaService } from '@expense-track/nestjs-prisma-client'
import { UserRepository } from '@expense-track/prisma-data-access'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DataAccessUser extends UserRepository {
  constructor(readonly prisma: PrismaService) {
    super()
  }
}
