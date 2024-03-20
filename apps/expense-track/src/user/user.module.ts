import { DataAccessModule } from '@expense-track/data-access';
import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DataAccessModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
