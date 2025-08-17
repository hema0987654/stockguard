import { UserRole } from '../entities/auth.entity';
export declare class CreateAuthDto {
    fName: string;
    email: string;
    password: string;
    phoneNumber?: string;
    role?: UserRole;
    address?: string;
    profileImage?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
