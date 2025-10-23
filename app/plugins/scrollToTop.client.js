export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  router.afterEach((to, from) => {
    if (
      to.path.replace(/^\/[a-z]{2}/, '') ===
      from.path.replace(/^\/[a-z]{2}/, '')
    ) {
      return;
    }

    // Wait the page to render
    nuxtApp.hooks.hookOnce('page:finish', () => {
      window.scrollTo({
        top: 0,
      });
    });
  });
});
