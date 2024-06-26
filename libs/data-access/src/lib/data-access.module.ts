import { PrismaClientModule } from '@expense-track/prisma-client'
import { Module } from '@nestjs/common'
import {
  DataAccessActionService,
  DataAccessRoleService,
  DataAccessUserService,
} from './services'

@Module({
  imports: [PrismaClientModule],
  providers: [
    DataAccessUserService,
    DataAccessRoleService,
    DataAccessActionService,
  ],
  exports: [
    DataAccessUserService,
    DataAccessRoleService,
    DataAccessActionService,
  ],
})
export class DataAccessModule {}
