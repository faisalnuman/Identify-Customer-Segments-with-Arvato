import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { TeamsModule } from '../teams/teams.module';
import { CrisesModule } from '../crises/crises.module';
import { ChatModule } from '../chat/chat.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { AuditModule } from '../audit/audit.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TeamsModule,
    CrisesModule,
    ChatModule,
    NotificationsModule,
    DashboardModule,
    AuditModule
  ]
})
export class AppModule {}
