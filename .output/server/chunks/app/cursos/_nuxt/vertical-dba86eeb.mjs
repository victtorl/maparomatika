import { ref, resolveComponent, unref, useSSRContext } from 'vue';
import { e as useRoute } from '../../server.mjs';
import { u as useRouteParam } from './routest-5c61a953.mjs';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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
  __name: "vertical",
  __ssrInlineRender: true,
  setup(__props) {
    const booll = ref(Boolean);
    const doInfo = (e) => {
      console.log(e);
      booll.value = e;
    };
    const route = useRoute();
    const routeST = useRouteParam();
    routeST.setrouteparam(route.name);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PanelOferta = resolveComponent("PanelOferta");
      const _component_HeaderBaseVertical = resolveComponent("HeaderBaseVertical");
      _push(`<!--[-->`);
      if (unref(routeST).routeparam != "explora") {
        _push(`<span>`);
        _push(ssrRenderComponent(_component_PanelOferta, {
          visible: unref(booll),
          onSendinfo: doInfo
        }, null, _parent));
        _push(ssrRenderComponent(_component_HeaderBaseVertical, null, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/vertical.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=vertical-dba86eeb.mjs.map
