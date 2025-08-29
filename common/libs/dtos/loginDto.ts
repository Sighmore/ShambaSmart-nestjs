/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
/* eslint-disable prettier/prettier */
export class LoginDto {
  @ApiProperty({ description: 'User email' })
  email: string;
  @ApiProperty({ description: 'User password' })
  password: string;
}