import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('crises')
export class CrisesController {
  @Get()
  listCrises() {
    return [];
  }

  @Post()
  createCrisis(@Body() payload: { title: string; resolutionSummary?: string }) {
    return {
      id: 'crisis-1',
      crisisCode: 'CR-2026-0001',
      status: 'OPEN',
      ...payload,
      events: ['audit:create', 'notify:assigned-members', 'chat-room:auto-created']
    };
  }

  @Put(':id')
  updateCrisis(@Param('id') id: string, @Body() payload: Record<string, unknown>) {
    return { id, ...payload, events: ['audit:update', 'notify:significant-change'] };
  }

  @Post(':id/close')
  closeCrisis(@Param('id') id: string, @Body() payload: { resolutionSummary: string }) {
    if (!payload.resolutionSummary?.trim()) {
      throw new Error('resolutionSummary is required to close crisis');
    }
    return { id, status: 'CLOSED', resolutionSummary: payload.resolutionSummary, events: ['audit:close', 'notify:closed'] };
  }

  @Post(':id/reopen')
  reopenCrisis(@Param('id') id: string) {
    return { id, status: 'IN_PROGRESS', events: ['audit:reopen', 'notify:reopened'] };
  }
}
