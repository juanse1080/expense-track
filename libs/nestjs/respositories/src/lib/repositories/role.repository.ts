import { RoleRepository } from '@expense-track/prisma/data-access'
import { PrismaService } from '@expense-track/nestjs/prisma-client'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DataAccessRole extends RoleRepository {
  constructor(prisma: PrismaService) {
    super(prisma)
  }
}
