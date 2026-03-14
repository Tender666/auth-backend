import { IsEmail, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  tenantId: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  //   @IsString()
  //   roleId: string;

  @IsOptional()
  @IsString()
  departmentId?: string;

  //   @IsOptional()
  //   @IsBoolean()
  //   isCritical?: boolean;
}
