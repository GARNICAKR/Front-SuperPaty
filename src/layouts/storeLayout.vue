<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      :width="230"
    >
    </q-drawer>
    <q-page-container class="containerPage">
      <router-view />
    </q-page-container>
    <div id="contenedor-left">
      <img id="img_left" alt="Family" src="~assets/img_left.svg" />
    </div>
    <div id="contenedor-right">
      <img id="img_right" alt="Family" src="~assets/img_left.svg" />
    </div>
  </q-layout>
</template>

<script setup>
import { ref, defineComponent } from "vue";
import useQuasar from "quasar/src/composables/use-quasar.js";
import router from "src/router/index";
const $q = useQuasar();
defineComponent({
  name: "StoreLayaout",
});
let miniState = ref(true);
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
<style lang="scss">
.containerPage {
  background-color: rgb(242, 242, 242);
}
#img_left {
  width: 100%; /* Duplica el tamaño para compensar el contenedor de 50% de ancho */
  height: 263.62px;
  margin-left: -6%; /* Desplaza la imagen a la izquierda */
}
#contenedor-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 184.27px; /* Ajusta esto al tamaño de tu imagen */
  height: 263.62px; /* Ajusta esto al tamaño de tu imagen */
  overflow: hidden;
  margin-top: 50px;
  z-index: 1;
}
#img_right {
  width: 100%; /* Duplica el tamaño para compensar el contenedor de 50% de ancho */
  height: 263.62px;
  margin-left: 40%; /* Desplaza la imagen a la izquierda */
}
#contenedor-right {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 184.27px; /* Ajusta esto al tamaño de tu imagen */
  height: 263.62px; /* Ajusta esto al tamaño de tu imagen */
  overflow: hidden;
  margin-bottom: 17px;
  z-index: 1;
}
</style>