import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User_Login } from './shamba_auth.model';
import { SignupDto } from 'common/libs/dtos/signupDto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'common/libs/dtos/loginDto';

@Injectable()
export class ShambaAuthService {
  constructor(
    @InjectRepository(User_Login)
    private readonly userRepo: Repository<User_Login>,
    private readonly jwtService: JwtService,
  ) {}

  async register(signupDto: SignupDto) {
    const { email, password, fullName } = signupDto;

    // 1️⃣ Check if email already exists
    const existingUser = await this.userRepo.findOne({ where: { email } });
    if (existingUser) throw new ConflictException('Email already registered');

    // 2️⃣ Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // 3️⃣ Create the new user
    const user = this.userRepo.create({
      fullName,
      email,
      password: hashedPassword,
    });
    await this.userRepo.save(user);

    // 4️⃣ (Optional) Generate JWT token
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    // 5️⃣ Return user info + token
    return {
      id: user.id,
      email: user.email,
      access_token: token,
    };
  }

  //login using username and password: generates access token
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // 1️⃣ Find user by email
    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    // 2️⃣ Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid credentials');

    // 3️⃣ Generate JWT
    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    // 4️⃣ Return structured response
    return {
      id: user.id,
      email: user.email,
      access_token: token,
    };
  }
}
