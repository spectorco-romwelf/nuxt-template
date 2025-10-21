export default {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (
      to.path.replace(/^\/[a-z]{2}/, '') ===
      from.path.replace(/^\/[a-z]{2}/, '')
    ) {
      return false;
    }

    return { top: 0 };
  },
};
