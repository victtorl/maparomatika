import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { looseIndexOf } from '@vue/shared';




export const useGeolocalizacionStore=defineStore("geolocalizacion-store",() => {
    
   const geousuarios = ref([] as Array<{}|null>);
   function setgeousuarios(data: any) {
        geousuarios.value = geousuarios.value.concat(data);
    }
    function filtergeousuarios(data: any) {
     const newArr= geousuarios.value.filter(u=>looseIndexOf(geousuarios.value,u)!=data)
     geousuarios.value=newArr
     console.log(newArr);
    }
    function cleargeousuarioss() {
    geousuarios.value =[]
    }

   return{
    geousuarios,
    setgeousuarios,
    filtergeousuarios,
    cleargeousuarioss,

   }
  
})