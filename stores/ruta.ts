import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import { looseIndexOf } from '@vue/shared';




export const useRutasStore=defineStore("rutas-store",() => {

   const grouprutas = ref([] as Array<{}|null>);
   

   function setgrouprutas(data: any) {
        grouprutas.value = grouprutas.value.concat(data);
    }

    function filtergrouprutas(data: any) {
     const newArr= grouprutas.value.filter(u=>looseIndexOf(grouprutas.value,u)!=data)
     grouprutas.value=newArr
     console.log(newArr);
     
    }

    function cleargrouprutass() {
    grouprutas.value =[]
    }




   return{
    grouprutas,
    setgrouprutas,
    filtergrouprutas,
    cleargrouprutass,

   }
  
})