import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  @Get()
  list() {
    return [];
  }

  @Post('test')
  sendTest(@Body() payload: { userId: string; channel: 'EMAIL' | 'PUSH' | 'IN_APP' }) {
    return { status: 'queued', ...payload };
  }
}
