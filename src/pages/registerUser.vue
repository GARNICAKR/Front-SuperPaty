<template>
  <q-page padding> Hola Mundo </q-page>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();
defineComponent({
  name: "RegisterUser",
});
</script>