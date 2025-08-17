import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createAuthDto: CreateAuthDto): Promise<{
        message: string;
        token: string;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
        token: string;
    }>;
}
