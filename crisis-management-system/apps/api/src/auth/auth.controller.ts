import { Body, Controller, Get, Post, UnauthorizedException } from '@nestjs/common';
import { Role } from '../common/roles';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: { email: string; password: string; client: 'web' | 'mobile' }) {
    // Placeholder auth flow
    const role = body.email.includes('admin') ? Role.ADMIN : Role.USER;
    if (body.client === 'mobile' && role === Role.ADMIN) {
      throw new UnauthorizedException('Mobile access is restricted for Admin users. Please use the web portal.');
    }
    return {
      accessToken: 'stub-jwt-token',
      refreshToken: 'stub-refresh-token',
      user: { email: body.email, role }
    };
  }

  @Get('me')
  me() {
    return { id: 'u-1', role: Role.USER, email: 'user@example.com' };
  }
}
