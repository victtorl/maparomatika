import { ref, useSSRContext } from 'vue';
import { e as useRoute } from '../../server.mjs';
import { u as useRouteParam } from './routest-5c61a953.mjs';
import { ssrRenderSlot } from 'vue/server-renderer';
import '../../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    ref(Boolean);
    const route = useRoute();
    const routeST = useRouteParam();
    routeST.setrouteparam(route.name);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-4bc88b7b.mjs.map
