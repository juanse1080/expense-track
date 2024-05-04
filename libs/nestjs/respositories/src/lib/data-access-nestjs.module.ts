import { PrismaClientModule } from '@expense-track/nestjs-prisma-client'
import { Module } from '@nestjs/common'
import {
  DataAccessAction,
  DataAccessExpenditure,
  DataAccessRole,
  DataAccessUser,
} from './repositories'

@Module({
  imports: [PrismaClientModule],
  providers: [
    DataAccessUser,
    DataAccessRole,
    DataAccessAction,
    DataAccessExpenditure,
  ],
  exports: [
    DataAccessUser,
    DataAccessRole,
    DataAccessAction,
    DataAccessExpenditure,
  ],
})
export class DataAccessModule {}
