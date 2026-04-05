import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('crises/:id/messages')
export class ChatController {
  @Get()
  list(@Param('id') id: string) {
    return { crisisId: id, items: [] };
  }

  @Post()
  send(@Param('id') id: string, @Body() body: { messageText: string }) {
    return { crisisId: id, ...body, sent: true };
  }
}
