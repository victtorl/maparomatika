export default defineNuxtPlugin((nuxtApp) => {
  var apiClient = {
    session: {
      userId: "",
    },
    config(session: any) {
      console.log(session, "la sesion");
      this.session = session;
      return this;
    },
    async getDataLanding(){
      const { data, error } = await useFetch(`/landing`, {
        baseURL: 'https://www.witreel.com/api-v2/',
        key: "collective-key",
      });
      return { data, error };
    },
    async getExplora(){
      const { data, error } = await useFetch(`/institutions/paginateposts?limit=1000&page=1`, {
        baseURL: 'https://www.witreel.com/api/',
        key: "get-explora",
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
