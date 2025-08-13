import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/auth.entity';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createAuthDto: CreateAuthDto) {

    const existingUser = await this.userRepository.findOneBy({ email: createAuthDto.email });
    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    const passhash = await bcrypt.hash(createAuthDto.password, 10);
    const user = this.userRepository.create({
      ...createAuthDto,
      password: passhash,
    });

    const payload = { sub: user.id,emil:user.email, role: user.role };
    const token = await this.jwtService.signAsync(payload);

    await this.userRepository.save(user);

    return {
      message: 'The account creation process has been completed successfully.',
      token,
    };
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new BadRequestException('This email is not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new BadRequestException('Incorrect password');
    }

    const payload = { sub: user.id,email:user.email, role: user.role };
    const token = await this.jwtService.signAsync(payload);

    return {
      message: 'Login successful',
      token,
    };
  }
}
