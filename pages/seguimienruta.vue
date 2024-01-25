<template>
       <div class="flex w-full  h-8 bg-[#e6e4e4] font-semibold text-center items-center text-[#9399ab]  font-opensans"> 
          <div class="flex text-[12px] sm:text-sm pl-3 lg:justify-center lg:items-center">
            <div class="flex gap-x-[2px] w-auto">
              <p class="  font-extrabold">HOME</p>
              <p class="  font-extrabold">></p>
            </div>
            <div class="flex gap-x-[2px] w-auto">
              <p class="  font-extrabold">OPERACIONES</p>
              <p class="  font-extrabold">></p>
            </div>
            <div class="flex gap-x-[2px] w-auto">
              <p class="  font-extrabold">Geolocalizacion</p>
              <p class="  font-extrabold">></p>
            </div>
            <div class="flex gap-x-[2px] w-auto">
              <p class="w--500 font-extrabold">Seguimiento de Ruta</p>
            </div>
          </div>
        </div>
    <div class="flex flex-col lg:flex-row ">
        <!-- PARTE IZQUIERDA  -->
        <div class="w-[100%] lg:w-[40%] border-[1px] border-[#DFDFDF] p-3">
            <div class="flex flex-col  items-start px-2 py-2 bg-[#F5F5F5]">
                <div class="flex gap-1">
                    <p>🏁</p>
                    <p class="text-[#68A2DD] font-semibold">Seguimiento de Ruta</p>
                </div>
                <div class="flex gap-1 items-center py-1">
                        <VueDatePicker v-model="date"  locale="pe"/>
                </div>
            </div>

            <div class="flex flex-col  items-center px-2 py-2 bg-[#F5F5F5] border-[1px] border-[#DFDFDF] text-white">
                <div class="flex gap-1 ">
                
                     <button type="submit" class="flex-none rounded-sm bg-[#1C5196] px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#287be8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287be8]">Buscar</button>
                     <button type="submit" class="flex-none rounded-sm bg-[#1C5196] px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#287be8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287be8]">Mostrar Ruta</button>
                </div>
            </div>

            <div class="container border-[1px] border-[#DFDFDF]">
                <!-- <div class="border-b-[1px] font-medium text-white border-[#DFDFDF] bg-[#888888] pl-2 py-2 text-center">Lima</div> -->
                <!-- tabla -->
                <div class="p-2">
                    <div class="flex flex-col">
                        <div class="-m-1.5 overflow-x-auto">
                            <div class="p-1.5 min-w-full inline-block align-middle">
                                <div class="overflow-hidden">
                                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead>
                                            <tr>
                                                
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                            <tr v-for="item in usuarios">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                                    <div class="flex items-center mb-4">
                                                        <input id="default-checkbox" type="checkbox" value="" @click="fnLocalsendInfo(item,looseIndexOf(usuarios,item))" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                                    </div>
                                                </td>
                                               
                                                <td class="px-6 py-4 whitespace-nowrap text-sm  text-center text-gray-800 dark:text-gray-200 cursor-pointer" >
                                                    {{ item.nombre }}
                                                </td>

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fin tabla -->
                <!-- <div class="border-t-[1px] font-medium text-white border-[#DFDFDF]  bg-[#888888] pl-2 py-2 text-center">Provincias</div> -->
            </div>
        </div>
        <!-- PARTE DERECHA  -->
        <div class="container w-[100%] lg:w-[60%] h-[60vh] lg:h-auto  p-3 lg:p-0 border-[1px]  ">
        <InitialMapRoute ref="sendMapRef"/>
    </div>
</div></template>

<script setup="ts">
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { looseIndexOf } from '@vue/shared';


const date = ref();

const rutaST = useRutasStore()

const sendMapRef = ref(null)

const fnLocalsendInfo = (u,index) => {
    console.log(u);
    if(rutaST.grouprutas.includes(u.coordenadas)==false){
        rutaST.setgrouprutas(u.coordenadas);
    }
    sendMapRef.value.setUserUbi(u.coordenadas);
 
}



  
const usuarios = [
    {
        nombre: 'Javier Oloarte',
        coordenadas: { lat: -12.067792817722756, lng: -77.03455993530991 }
    },
    {
        nombre: 'Jose Diaz',
        coordenadas: { lat: -12.005293371496183, lng: -76.98487594784856 }
    },
    {
        nombre: 'Juana Garcia',
        coordenadas: { lat: -12.01272314777714, lng: -76.99955299551729 }
    }
]

</script>