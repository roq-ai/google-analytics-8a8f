const mapping: Record<string, string> = {
  'google-analytics': 'google_analytics',
  invitations: 'invitation',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
