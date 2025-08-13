import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserRole } from '../entities/auth.entity'; 
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty({ description: 'First name of the user', example: 'John' })
  @IsNotEmpty()
  @IsString()
  fName: string;

  @ApiProperty({ description: 'Email address of the user', example: 'john@example.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Password for the account', example: 'Password123' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiPropertyOptional({ description: 'Phone number of the user', example: '+20123456789' })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiPropertyOptional({ description: 'Role of the user', enum: UserRole, example: UserRole.ADMIN })
  @IsOptional()
  @IsIn(Object.values(UserRole))
  role?: UserRole;

  @ApiPropertyOptional({ description: 'User address', example: '123 Main St, Cairo' })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({ description: 'Profile image URL', example: 'https://example.com/avatar.png' })
  @IsOptional()
  @IsString()
  profileImage?: string;

  @ApiPropertyOptional({ description: 'Creation date', example: '2025-08-13T18:00:00Z' })
  @IsOptional()
  createdAt?: Date;

  @ApiPropertyOptional({ description: 'Last update date', example: '2025-08-13T18:00:00Z' })
  @IsOptional()
  updatedAt?: Date;
}
