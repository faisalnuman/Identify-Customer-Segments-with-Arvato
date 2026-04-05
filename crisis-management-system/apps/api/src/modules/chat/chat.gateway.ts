import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';

@WebSocketGateway({ namespace: '/hubs/crisis-chat' })
export class ChatGateway {
  @SubscribeMessage('sendMessage')
  handleSendMessage(@MessageBody() payload: { crisisId: string; text: string }) {
    return {
      group: `crisis-${payload.crisisId}`,
      text: payload.text,
      deliveredAt: new Date().toISOString(),
    };
  }
}
