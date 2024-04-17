import { OmitType, PartialType } from '@nestjs/swagger'
import { UpdateUserInput } from '../interfaces/update-user.interface'
import { CreateUserDto } from './create-user.dto'

export class UpdateUserDto
  extends OmitType(PartialType(CreateUserDto), ['email'])
  implements UpdateUserInput {}
