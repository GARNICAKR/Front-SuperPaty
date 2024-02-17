<template>
  <q-page padding>
    <div class="row justify-between">
      <div class="col-5"></div>
      <div class="col-6">
        <q-form class="" ref="registerUserForm" @submit="RegisterUser">
          <div class="row justify-between">
            <div class="col-7">
              <strong class="q-ml-md text-registerE">Nombre:</strong>
              <q-input
                filled
                class="q-px-sm"
                input-class="text-black"
                standout="bg-grey-3"
                v-model="nombre"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Ingresa tu Nombre',
                ]"
              >
                <template v-slot:append>
                  <q-icon class="text-primary" name="fa-solid fa-circle-user" />
                </template>
              </q-input>
            </div>
            <div class="col-4">
              <strong class="q-ml-md text-registerE">Tipo de usuario :</strong>
              <q-select
                filled
                class="q-px-sm"
                transition-show="scale"
                transition-hide="scale"
                hide-dropdown-icon
                v-model="userType"
                :options="optionsUser"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Selecciona un Tipó de Usuario',
                ]"
              >
                <template v-slot:append>
                  <q-icon
                    class="text-primary"
                    name="fa-solid fa-hospital-user"
                  />
                </template>
              </q-select>
            </div>
          </div>
          <div class="row justify-between q-mt-md">
            <div class="col-5">
              <strong class="q-ml-md text-registerE">Nombre de Usuario:</strong>
              <q-input
                filled
                class="q-px-sm"
                input-class="text-black"
                standout="bg-grey-3"
                v-model="username"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'Ingresa tu Nombre de Usuario',
                ]"
              >
                <template v-slot:append>
                  <q-icon class="text-primary" name="fa-solid fa-envelope" />
                </template>
              </q-input>
            </div>
            <div class="col-5">
              <strong class="q-ml-md text-registerE">Contraseña:</strong>
              <q-input
                filled
                class="q-px-sm"
                type="password"
                input-class="text-black"
                standout="bg-grey-3"
                v-model="password"
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Ingresa tu Contraseña',
                  (val) => val.length > 7 || 'Debe tener al menos 8 digitos',
                ]"
              >
                <template v-slot:append>
                  <q-icon class="text-primary" name="fa-solid fa-lock" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="flex flex-center">
            <q-btn
              push
              text-color="black"
              color="blue"
              icon="fa-solid fa-user-plus"
              type="sumbit"
              label="Crear Usuario"
            >
            </q-btn>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();
defineComponent({
  name: "RegisterUser",
});
const optionsUser = ref(["Administrador", "Empleado"]);
const nombre = ref(null);
const username = ref(null);
const password = ref(null);
const userType = ref(null);
const registerUserForm = ref(null);
function RegisterUser() {
  console.log("Entro");
  registerUserForm.value.resetValidation();
}
</script>