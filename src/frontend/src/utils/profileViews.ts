// ⚠️ NÃO usar direto em componentes
// Usado apenas pelo analyticsService

export function incrementProfileView(profileId: string) {
  const raw = localStorage.getItem("profileViews");
  const views = raw ? JSON.parse(raw) : {};

  views[profileId] = (views[profileId] || 0) + 1;

  localStorage.setItem("profileViews", JSON.stringify(views));
}

export function getProfileViews(profileId: string): number {
  const raw = localStorage.getItem("profileViews");
  const views = raw ? JSON.parse(raw) : {};

  return views[profileId] || 0;
}

//<p>{getProfileViews(profileData.id)} visualizações</p>