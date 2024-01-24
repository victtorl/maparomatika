<template>
    <!-- aqui pondras un header que se repite siempre -->
    <!-- <span v-if="routeST.routeparam!='explora'" >
      <PanelOferta :visible="booll" @sendinfo="doInfo" />
      <HeaderBase/>
    </span> -->
    <slot />
     <!-- <span v-if="routeST.routeparam != 'explora'" >
      <FooterBase/>
    </span> -->
</template>
<script setup>
const booll=ref(Boolean)
const doInfo=(e) => {
  console.log(e);
  booll.value=e
}

const route = useRoute()
const routeST = useRouteParam()
routeST.setrouteparam(route.name)



</script>