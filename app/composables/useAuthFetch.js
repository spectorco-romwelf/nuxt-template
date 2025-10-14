export const useAuthFetch = () => {
  const token = useCookie('auth-token')?.value || '';

  const getFetch = (url) => {
    return useFetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const postFetch = async (url, body = {}, method = 'POST') => {
    return await $fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body,
    });
  };

  return { getFetch, postFetch };
};
