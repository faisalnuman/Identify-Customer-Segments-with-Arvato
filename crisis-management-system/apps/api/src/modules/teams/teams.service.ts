export class TeamsService {
  mapTeamToCategory(teamId: string, category: string, severity: string) {
    return { teamId, category, severity, mapped: true };
  }
}
