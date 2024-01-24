import { d as defineStore, _ as _export_sfc, a as useRuntimeConfig } from '../../server.mjs';
import { ref, unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { Loader } from '@googlemaps/js-api-loader';
import { looseIndexOf } from '@vue/shared';
import VueDatePicker from '@vuepic/vue-datepicker';
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

const useRutasStore = defineStore("rutas-store", () => {
  const grouprutas = ref([]);
  function setgrouprutas(data) {
    grouprutas.value = grouprutas.value.concat(data);
  }
  function filtergrouprutas(data) {
    const newArr = grouprutas.value.filter((u) => looseIndexOf(grouprutas.value, u) != data);
    grouprutas.value = newArr;
    console.log(newArr);
  }
  function cleargrouprutass() {
    grouprutas.value = [];
  }
  return {
    grouprutas,
    setgrouprutas,
    filtergrouprutas,
    cleargrouprutass
  };
});
const _sfc_main$1 = {
  __name: "InitialMapRoute",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const config = useRuntimeConfig();
    const rutaST = useRutasStore();
    ref(null);
    const mapDiv = ref(null);
    const rederMap = (currPos, pointmap) => {
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
        ref([]);
        const flightPath = new google.maps.Polyline({
          path: rutaST.grouprutas,
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1,
          strokeWeight: 2
        });
        flightPath.setMap(map);
        return { currPos, mapDiv };
      });
    };
    const setUserUbi = async (u, p) => {
      rederMap(u);
    };
    __expose({ setUserUbi });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "google-map shadow-[0_4px_9px_-4px_#54b4d3]",
        ref_key: "mapDiv",
        ref: mapDiv,
        id: "map"
      }, _attrs))} data-v-9f32c187></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InitialMapRoute.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9f32c187"]]);
const _sfc_main = {
  __name: "seguimienruta",
  __ssrInlineRender: true,
  setup(__props) {
    const date = ref();
    useRutasStore();
    const sendMapRef = ref(null);
    const usuarios = [
      {
        nombre: "Javier Oloarte",
        coordenadas: { lat: -12.067792817722756, lng: -77.03455993530991 }
      },
      {
        nombre: "Jose Diaz",
        coordenadas: { lat: -12.005293371496183, lng: -76.98487594784856 }
      },
      {
        nombre: "Juana Garcia",
        coordenadas: { lat: -12.01272314777714, lng: -76.99955299551729 }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InitialMapRoute = __nuxt_component_0;
      _push(`<!--[--><div class="flex w-full container h-8 bg-[#e6e4e4] font-semibold text-center items-center text-[#9399ab] mx-auto mt-16 font-opensans"><p class="pl-4">HOME&gt;OPERACIONES&gt;Geolocalizaci\xF3n&gt;Seguimiento de Ruta</p></div><div class="flex w-full container mx-auto"><div class="w-[40%] border-[1px] border-[#DFDFDF] p-3"><div class="flex flex-col items-start px-2 py-2 bg-[#F5F5F5]"><div class="flex gap-1"><p>\u{1F3C1}</p><p class="text-[#68A2DD] font-semibold">Seguimiento de Ruta</p></div><div class="flex gap-1 items-center py-1">`);
      _push(ssrRenderComponent(unref(VueDatePicker), {
        modelValue: date.value,
        "onUpdate:modelValue": ($event) => date.value = $event,
        locale: "pe"
      }, null, _parent));
      _push(`</div></div><div class="flex flex-col items-center px-2 py-2 bg-[#F5F5F5] border-[1px] border-[#DFDFDF] text-white"><div class="flex gap-1"><button type="submit" class="flex-none rounded-sm bg-[#1C5196] px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#287be8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287be8]">Buscar</button><button type="submit" class="flex-none rounded-sm bg-[#1C5196] px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#287be8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287be8]">Mostrar Ruta</button></div></div><div class="container border-[1px] border-[#DFDFDF]"><div class="p-2"><div class="flex flex-col"><div class="-m-1.5 overflow-x-auto"><div class="p-1.5 min-w-full inline-block align-middle"><div class="overflow-hidden"><table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"><thead><tr></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700"><!--[-->`);
      ssrRenderList(usuarios, (item) => {
        _push(`<tr><td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"><div class="flex items-center mb-4"><input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></div></td><td class="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-800 dark:text-gray-200 cursor-pointer">${ssrInterpolate(item.nombre)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div></div></div></div><div class="w-[60%]">`);
      _push(ssrRenderComponent(_component_InitialMapRoute, {
        ref_key: "sendMapRef",
        ref: sendMapRef
      }, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/seguimienruta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=seguimienruta-63ea5274.mjs.map
