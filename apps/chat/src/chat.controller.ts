import { Controller, Get } from '@nestjs/common';

import { ChatService } from './chat.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { SharedService } from '@app/shared';

@Controller()
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
    private readonly sharedService: SharedService,
  ) {}

  @Get()
  getHello(): string {
    return this.chatService.getHello();
  }

  @MessagePattern({ cmd: 'get-chat' })
  async addFriend(
    @Ctx() context: RmqContext,
    @Payload()
    payload: { userId: number; conversationId: number; last_key: number },
  ) {
    this.sharedService.acknowledgeMessage(context);
    console.log('get chat payload: ', payload);

    return this.chatService.getChat(
      payload.userId,
      payload.conversationId,
      payload.last_key,
    );
  }
}
