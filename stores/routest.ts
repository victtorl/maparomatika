import { defineStore } from "pinia";


export const useRouteParam=defineStore("routep-store",() => {

   const routeparam = ref('');
   
   function setrouteparam(routep: any) {
        routeparam.value=routep
    }

    function clearrouteparam() {
    routeparam.value =''
    }


    
   return{
    routeparam,
    setrouteparam,
    clearrouteparam,
   }
  
})