import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() payload: { email: string; password: string }) {
    return {
      accessToken: 'stub-jwt-token',
      user: {
        id: 'u_1',
        email: payload.email,
        role: payload.email.includes('admin') ? 'ADMIN' : 'USER',
      },
    };
  }

  @Post('refresh')
  refresh() {
    return { accessToken: 'stub-refreshed-jwt-token' };
  }

  @Post('logout')
  logout() {
    return { ok: true };
  }

  @Get('me')
  me() {
    return { id: 'u_1', role: 'USER' };
  }
}
