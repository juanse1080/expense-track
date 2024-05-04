import { PrismaService } from '@expense-track/nestjs-prisma-client'
import { ActionRepository } from '@expense-track/prisma-data-access'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DataAccessAction extends ActionRepository {
  constructor(readonly prisma: PrismaService) {
    super()
  }
}
