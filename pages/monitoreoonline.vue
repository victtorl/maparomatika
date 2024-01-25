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
          <p class="w--500 font-extrabold">Monitoreo Online</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row  ">
          <!-- PARTE IZQUIERDA  -->
          <div class="w-[100%] lg:w-[40%] border-[1px] border-[#DFDFDF] p-3">
            <div class="flex  justify-between items-center px-2 py-2 bg-[#4B77BE]">
              <div class="flex gap-1">
                <p>📌</p>
                <p class="text-white">Monitoreo Online</p>
              </div>
              <div class="flex gap-1 items-center">
                 <button type="submit" class="flex-none rounded-sm bg-[#578EBE] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#287be8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#287be8]">Posición Actual 🔽</button>
              </div>
            </div>
            <div class="container border-[1px] border-[#DFDFDF]">
              <!-- <div class="border-b-[1px] font-medium text-gray-500 border-[#DFDFDF] pl-2 py-2">Lima</div> -->
              <!-- tabla -->
              <div class="p-2">
                <div class="flex flex-col">
                    <div class="-m-1.5 overflow-x-auto">
                      <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="overflow-hidden">
                          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                              <tr>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Bateria</th>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Señal</th>
                                <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Usuario</th>
                              </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                              <tr v-for="item in listaProvedores">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">🔋</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">📶</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 cursor-pointer "
                                    @click="handleUbic(item.ubicacion)"                                
                                >{{ item.nombre }}</td>
                              </tr>
                        
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <!-- fin tabla -->
              <!-- <div class="border-t-[1px] font-medium text-gray-500 border-[#DFDFDF] pl-2 py-2">Provincias</div> -->
            </div>
          </div>
          <!-- PARTE DERECHA  -->
          <div class="container w-[100%] lg:w-[60%] h-[60vh] lg:h-auto  p-3 lg:p-0 border-[1px] ">
          <InitialMap ref="sendUbiRef"/>
          </div>
    </div>

</template>

<script setup="ts">

const sendUbiRef = ref(null)

const handleUbic=(u) => {
  sendUbiRef.value.changeUbi(u)
}

const listaProvedores=[
  {nombre:'Javier Olarte',ubicacion: { lat: -12.070430252622687, lng: -77.0350761713482 } },
  {nombre:'Juan Porro',ubicacion: { lat: - 12.046844019137934,  lng: -76.96829989517569 } },
  {nombre:'gabriel Jesus',ubicacion: { lat: - 11.996517000888899, lng: -77.00988486350785 } },
  {nombre:'Edwin Oviedo',ubicacion: { lat: - 11.863289883742516, lng: -77.07352223020608 } },
  {nombre:'Juan Vargas',ubicacion: { lat: -12.132701349039428, lng: -76.9816036517293 } },
  { nombre: 'Oslin Mora', ubicacion: { lat: - 12.046844019137934, lng: -77.07352223020608  } },
]


</script>