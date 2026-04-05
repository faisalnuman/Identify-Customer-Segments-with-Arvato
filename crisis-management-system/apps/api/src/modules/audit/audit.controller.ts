import { Controller, Get } from '@nestjs/common';

@Controller('audit')
export class AuditController {
  @Get()
  list() {
    return { module: 'audit', items: [] };
  }
}
