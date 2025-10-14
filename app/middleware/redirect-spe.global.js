export default defineNuxtRouteMiddleware((to) => {
  if (to.path.includes('/spe')) {
    const newPath = to.path.replace('/spe', '');

    return navigateTo({
      path: newPath,
      query: to.query,
      replace: true,
    });
  }
});
