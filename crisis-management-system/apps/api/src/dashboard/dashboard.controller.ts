import { Controller, Get } from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
  @Get('admin')
  adminSummary() {
    return {
      totalOpenCrises: 12,
      criticalCrises: 3,
      closedCrises: 40,
      avgClosureHours: 11.3
    };
  }

  @Get('user')
  userSummary() {
    return {
      assignedOpenCrises: 2,
      escalatedAssignedCrises: 1,
      recentActivity: []
    };
  }
}
