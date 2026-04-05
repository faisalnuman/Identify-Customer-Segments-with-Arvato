import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('crises/:id/messages')
export class ChatController {
  @Get()
  list(@Param('id') crisisId: string) {
    return { crisisId, messages: [] };
  }

  @Post()
  send(@Param('id') crisisId: string, @Body() payload: { messageText: string; attachmentUrl?: string }) {
    return {
      id: 'msg-1',
      crisisId,
      ...payload,
      signalRGroup: `crisis-${crisisId}`
    };
  }
}
