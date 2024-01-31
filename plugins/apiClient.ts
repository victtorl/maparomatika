
export default defineNuxtPlugin((nuxtApp) => {
  var apiClient = {


      async getSignal() {
      const { data, error } = await useFetch(`/maps/get-signal`, {
        baseURL: nuxtApp.$config.public.apiBase,
      });
      return { data, error };
    },
    async getLastLocation() {
      const { data, error } = await useFetch(`/maps/last-locations`, {
        baseURL: nuxtApp.$config.public.apiBase,
      });
      return { data, error };
    },
  };
  return {
    provide: {
      apiClient,
    },
  };
});
