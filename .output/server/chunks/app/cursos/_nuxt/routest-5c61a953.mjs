import { ref } from 'vue';
import { d as defineStore } from '../../server.mjs';

const useRouteParam = defineStore("routep-store", () => {
  const routeparam = ref("");
  function setrouteparam(routep) {
    routeparam.value = routep;
  }
  function clearrouteparam() {
    routeparam.value = "";
  }
  return {
    routeparam,
    setrouteparam,
    clearrouteparam
  };
});

export { useRouteParam as u };
//# sourceMappingURL=routest-5c61a953.mjs.map
