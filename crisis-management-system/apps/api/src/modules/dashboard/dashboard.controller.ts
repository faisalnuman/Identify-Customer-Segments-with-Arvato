import { Controller, Get } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
  @Get('admin')
  admin() {
    return { totalOpen: 0, critical: 0, closed: 0 };
  }

  @Get('user')
  user() {
    return { assignedOpen: 0, assignedCritical: 0 };
  }
}
