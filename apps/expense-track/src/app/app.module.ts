import { Module } from '@nestjs/common'
import { AuthModule } from '../auth/auth.module'
import { ExpenditureModule } from '../expenditure/expenditure.module'
import { UserModule } from '../user/user.module'

@Module({
  imports: [AuthModule, UserModule, ExpenditureModule],
  controllers: [],
})
export class AppModule {}
