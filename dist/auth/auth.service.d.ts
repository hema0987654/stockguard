import { Repository } from 'typeorm';
import { User } from './entities/auth.entity';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    create(createAuthDto: CreateAuthDto): Promise<{
        message: string;
        token: string;
    }>;
    login(email: string, password: string): Promise<{
        message: string;
        token: string;
    }>;
}
