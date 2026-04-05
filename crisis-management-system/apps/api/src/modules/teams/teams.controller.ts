import { Controller, Get } from '@nestjs/common';

@Controller('teams')
export class TeamsController {
  @Get()
  list() {
    return { module: 'teams', items: [] };
  }
}
