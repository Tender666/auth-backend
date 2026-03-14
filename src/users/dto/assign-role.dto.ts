import { Role } from '../../enums/role.enum';
import { IsEnum } from 'class-validator';

export class AssignRoleDto {
  @IsEnum(Role)
  role: Role;
}
