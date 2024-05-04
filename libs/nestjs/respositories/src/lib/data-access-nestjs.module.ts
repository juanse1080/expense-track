import { PrismaClientModule } from '@expense-track/nestjs/prisma-client'
import { Module } from '@nestjs/common'
import {
  DataAccessAction,
  DataAccessRole,
  DataAccessUser,
} from './repositories'

@Module({
  imports: [PrismaClientModule],
  providers: [DataAccessUser, DataAccessRole, DataAccessAction],
  exports: [DataAccessUser, DataAccessRole, DataAccessAction],
})
export class DataAccessModule {}
