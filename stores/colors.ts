import { defineStore } from "pinia";

export const useColorStore=defineStore("color-store",() => {

    
   const colorstore = ref({
      bg1:'#FFFFFF',
      bg2:'',
      bg3:'',
      state:1,
      fill:{
         dark:'#0F172A',
         light:'#2576A4'
      }
   });
   
   function setcolorstore(data: any) {
        colorstore.value=data
    }

    function restartcolorstore() {
    colorstore.value ={
      bg1:'#FFFFFF',
      bg2:'',
      bg3:'',
      state:1,
      fill:{
         dark:'#0F172A',
         light:'#2576A4'
      }
    }
    }


    
   return{
    colorstore,
    setcolorstore,
    restartcolorstore,
   }
  
})