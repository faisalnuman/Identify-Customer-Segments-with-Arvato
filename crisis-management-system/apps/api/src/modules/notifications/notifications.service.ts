export class NotificationsService {
  async notifyCrisisCreated(crisisId: string, userIds: string[]) {
    return {
      crisisId,
      userIds,
      channels: ['EMAIL', 'PUSH', 'IN_APP'],
      provider: {
        email: 'SendGrid|SMTP abstraction',
        push: 'Azure Notification Hubs',
      },
    };
  }
}
