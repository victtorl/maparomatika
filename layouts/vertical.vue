<template>
    <!-- aqui pondras un header que se repite siempre -->
    <span v-if="routeST.routeparam!='explora'" >
      <PanelOferta :visible="booll" @sendinfo="doInfo" />
      <HeaderBaseVertical/>
    </span>
    <slot />
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