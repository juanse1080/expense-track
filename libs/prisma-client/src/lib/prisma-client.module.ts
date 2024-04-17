import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { ExistConstraint } from './validators/exist-constraint.validator'
import { IsUniqueConstraint } from './validators/unique-constraint.validator'

@Module({
  controllers: [],
  providers: [PrismaService, IsUniqueConstraint, ExistConstraint],
  exports: [PrismaService],
})
export class PrismaClientModule {}
