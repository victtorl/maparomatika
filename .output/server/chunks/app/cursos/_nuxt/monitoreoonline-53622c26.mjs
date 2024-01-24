import { _ as _export_sfc, a as useRuntimeConfig } from '../../server.mjs';
import { ref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { Loader } from '@googlemaps/js-api-loader';
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

const _sfc_main$1 = {
  __name: "InitialMap",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const config = useRuntimeConfig();
    ref(null);
    const mapDiv = ref(null);
    const rederMap = (currPos) => {
      const loader = new Loader({
        apiKey: config.public.GOOGLE_MAPS_KEY_FRONTEND,
        version: "weekly",
        libraries: ["geometry"]
      });
      loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps");
        let map = new Map(document.getElementById("map"), {
          center: currPos,
          zoom: 18
        });
        const svgMarker = {
          path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
          fillColor: "blue",
          fillOpacity: 0.6,
          strokeWeight: 0,
          rotation: 0,
          scale: 2,
          anchor: new google.maps.Point(0, 20)
        };
        new google.maps.Marker({
          position: currPos,
          map,
          icon: svgMarker
        });
        return { currPos, mapDiv };
      });
    };
    const changeUbi = async (u) => {
      rederMap(u);
    };
    __expose({ changeUbi });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "google-map shadow-[0_4px_9px_-4px_#54b4d3]",
        ref_key: "mapDiv",
        ref: mapDiv,
        id: "map"
      }, _attrs))} data-v-5c59ff1e></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InitialMap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5c59ff1e"]]);
const _sfc_main = {
  __name: "monitoreoonline",
  __ssrInlineRender: true,
  setup(__props) {
    const sendUbiRef = ref(null);
    const listaProvedores = [
      { nombre: "Javier Olarte", ubicacion: { lat: -12.070430252622687, lng: -77.0350761713482 } },
      { nombre: "Juan Porro", ubicacion: { lat: -12.046844019137934, lng: -76.96829989517569 } },
      { nombre: "gabriel Jesus", ubicacion: { lat: -11.996517000888899, lng: -77.00988486350785 } },
      { nombre: "Edwin Oviedo", ubicacion: { lat: -11.863289883742516, lng: -77.07352223020608 } },
      { nombre: "Juan Vargas", ubicacion: { lat: -12.132701349039428, lng: -76.9816036517293 } },
      { nombre: "Oslin Mora", ubicacion: { lat: -12.046844019137934, lng: -77.07352223020608 } }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InitialMap = __nuxt_component_0;
      _push(`<!--[--><div class="flex w-full container h-8 bg-[#e6e4e4] font-semibold text-center items-center text-[#9399ab] mx-auto mt-16 font-opensans"><p class="pl-4 font-extrabold">HOME&gt;OPERACIONES&gt;Geolocalizacion&gt;Monitoreo Online</p></div><div class="flex w-full container mx-auto"><div class="w-[40%] border-[1px] border-[#DFDFDF] p-3"><div class="flex justify-between items-center px-2 py-2 bg-[#4B77BE]"><div class="flex gap-1"><p>\u{1F4CC}</p><p class="text-white">Monitoreo Online</p></div><div class="flex gap-1 items-center"><button type="submit" class="flex-none rounded-sm bg-[#578EBE] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#287be8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287be8]">Posici\xF3n Actual \u{1F53D}</button></div></div><div class="container border-[1px] border-[#DFDFDF]"><div class="p-2"><div class="flex flex-col"><div class="-m-1.5 overflow-x-auto"><div class="p-1.5 min-w-full inline-block align-middle"><div class="overflow-hidden"><table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"><thead><tr><th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Bateria</th><th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Se\xF1al</th><th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Usuario</th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700"><!--[-->`);
      ssrRenderList(listaProvedores, (item) => {
        _push(`<tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">\u{1F50B}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">\u{1F4F6}</td><td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 cursor-pointer">${ssrInterpolate(item.nombre)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div></div></div></div><div class="w-[60%]">`);
      _push(ssrRenderComponent(_component_InitialMap, {
        ref_key: "sendUbiRef",
        ref: sendUbiRef
      }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/monitoreoonline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=monitoreoonline-53622c26.mjs.map
