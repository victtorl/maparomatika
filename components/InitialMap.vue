<template>
    <div class="google-map shadow-[0_4px_9px_-4px_#54b4d3]" ref="mapDiv" id="map"></div>
</template>

<script setup>
import { ref, onMounted,defineExpose } from 'vue';
import { Loader } from "@googlemaps/js-api-loader"
const config = useRuntimeConfig();



const mapContainer = ref(null); // Use ref for the map container

const mapDiv=ref(null)




const rederMap=(currPos) => {
      const loader = new Loader({
        apiKey: config.public.GOOGLE_MAPS_KEY_FRONTEND,
        version: "weekly",
        libraries: ['geometry']
    });

      loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps");
        let map = new Map(document.getElementById('map'), {
            center: currPos,
            zoom: 18,
        });

        const svgMarker = {
            path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
            fillColor: "blue",
            fillOpacity: 0.6,
            strokeWeight: 0,
            rotation: 0,
            scale: 2,
            anchor: new google.maps.Point(0, 20),
        };

        const beachMarker = new google.maps.Marker({
            position: currPos,
            map,
            icon: svgMarker,
        });



        return { currPos, mapDiv }
    });
}

onMounted(() => {
    rederMap({ lat: -12.067247246774738, lng: -77.0337552726139 })
})

const changeUbi = async(u) => {
    rederMap(u)
}



defineExpose({changeUbi})


</script>

<style  scoped>
.google-map {
    width: 100%;
    height: 100%;
}
</style>