import { PrismaService } from '@expense-track/nestjs-prisma-client'
import { RoleRepository } from '@expense-track/prisma-data-access'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DataAccessRole extends RoleRepository {
  constructor(readonly prisma: PrismaService) {
    super()
  }
}
