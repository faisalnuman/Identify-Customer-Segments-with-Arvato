import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('teams')
export class TeamsController {
  @Get()
  listTeams() {
    return [];
  }

  @Post()
  createTeam(@Body() payload: Record<string, unknown>) {
    return { id: 'team-1', ...payload };
  }

  @Put(':id')
  updateTeam(@Param('id') id: string, @Body() payload: Record<string, unknown>) {
    return { id, ...payload };
  }

  @Post(':id/members')
  addMembers(@Param('id') id: string, @Body() payload: { userIds: string[] }) {
    return { teamId: id, added: payload.userIds };
  }

  @Delete(':id/members/:userId')
  removeMember(@Param('id') id: string, @Param('userId') userId: string) {
    return { teamId: id, removed: userId };
  }
}
