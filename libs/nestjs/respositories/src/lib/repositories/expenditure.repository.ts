import { PrismaService } from '@expense-track/nestjs-prisma-client'
import { ExpenditureRepository } from '@expense-track/prisma-data-access'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DataAccessExpenditure extends ExpenditureRepository {
  constructor(readonly prisma: PrismaService) {
    super()
  }
}
