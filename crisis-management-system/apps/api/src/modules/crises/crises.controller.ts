import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCrisisDto } from './dto/create-crisis.dto';

@Controller('crises')
export class CrisesController {
  @Get()
  list() {
    return { items: [] };
  }

  @Post()
  create(@Body() dto: CreateCrisisDto) {
    return {
      id: 'cr_1',
      crisisCode: 'CR-2026-0001',
      ...dto,
      status: 'OPEN',
      chatGroup: 'crisis-cr_1',
      auditLogged: true,
      notificationsTriggered: true,
    };
  }

  @Get(':id')
  detail(@Param('id') id: string) {
    return { id };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Record<string, unknown>) {
    return { id, updates: body, auditLogged: true };
  }

  @Post(':id/close')
  close(@Param('id') id: string, @Body() body: { resolutionSummary: string }) {
    return { id, status: 'CLOSED', resolutionSummary: body.resolutionSummary };
  }

  @Post(':id/reopen')
  reopen(@Param('id') id: string) {
    return { id, status: 'IN_PROGRESS' };
  }
}
