<template>
  <q-layout view="hhh Lpr lff" class="fondo">
    <q-header style="height: 54px">
      <q-toolbar>
        <q-btn flat to="/facebook" no-caps no-wrap v-if="$q.screen.gt.xs">
          <q-icon :name="mdiFacebook" color="blue" size="49px" />
        </q-btn>
        <div>
          <q-icon
            v-show="IconSearch"
            name="search"
            color="grey-8"
            size="24px"
            class="q-pt-sm q-pl-sm capas"
          />

          <input
            v-if="clase"
            v-on:click="Changue"
            text-color="grey-8"
            placeholder="Buscar en Facebook"
            class="InputSearch"
            unelevated
          />
          <input
            v-else
            v-on:click="Changue"
            text-color="grey-8"
            placeholder="Buscar en Facebook"
            class="InputSearchOn"
            unelevated
          />
        </div>

        <div class="q-gutter-md row Alinear no-wrap">
          <q-btn
            @click="blueButton(1)"
            v-if="!bandHome"
            unelevated
            rounded
            flat
            color="grey-8"
            class="q-mr-xl"
            icon="home"
            size="17px"
            to="/"
          >
            <q-tooltip>Home</q-tooltip>
          </q-btn>
          <q-btn
            v-else
            unelevated
            flat
            color="blue"
            class="q-mr-xl VistaBotones"
            icon="home"
            size="17px"
          >
            <q-tooltip>Home</q-tooltip>
          </q-btn>
          <q-btn
            @click="blueButton(2)"
            v-if="!bandWatch"
            unelevated
            rounded
            flat
            color="grey-8"
            class="q-mr-xl"
            icon="ondemand_video"
            size="17px"
            to="/counter"
          >
            <q-tooltip>Watch</q-tooltip>
          </q-btn>
          <q-btn
            v-else
            unelevated
            flat
            color="blue"
            class="q-mr-xl VistaBotones"
            icon="ondemand_video"
            size="17px"
          >
            <q-tooltip>Watch</q-tooltip>
          </q-btn>
          <q-btn
            @click="blueButton(3)"
            v-if="!bandStore"
            unelevated
            rounded
            flat
            color="grey-8"
            class="q-mr-xl"
            icon="storefront"
            size="17px"
            to="/messages1"
          >
            <q-tooltip>Marketplace</q-tooltip>
          </q-btn>
          <q-btn
            v-else
            unelevated
            flat
            color="blue"
            class="q-mr-xl VistaBotones"
            icon="storefront"
            size="17px"
          >
            <q-tooltip>Marketplace</q-tooltip>
          </q-btn>
          <q-btn
            @click="blueButton(4)"
            v-if="!bandGroup"
            unelevated
            rounded
            flat
            color="grey-8"
            class="q-mr-xl"
            icon="groups"
            size="17px"
            to="/messages2"
          >
            <q-tooltip>groups</q-tooltip>
          </q-btn>
          <q-btn
            v-else
            unelevated
            flat
            color="blue"
            class="q-mr-xl VistaBotones"
            icon="groups"
            size="17px"
          >
            <q-tooltip>groups</q-tooltip>
          </q-btn>
          <q-btn
            @click="blueButton(5)"
            v-if="!bandGames"
            unelevated
            rounded
            flat
            color="grey-8"
            class="q-mr-xl"
            icon="videogame_asset"
            size="17px"
            to="/formulario"
          >
            <q-tooltip>VideoGames</q-tooltip>
          </q-btn>
          <q-btn
            v-else
            unelevated
            flat
            color="blue"
            class="q-mr-xl VistaBotones"
            icon="videogame_asset"
            size="17px"
          >
            <q-tooltip>VideoGames</q-tooltip>
          </q-btn>
        </div>
        <q-space />
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            @click="blueButton(6)"
            v-if="!Avatarband"
            unelevated
            rounded
            flat
          >
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <p class="texto-color q-ml-xs q-mt-md">Jesus</p>
          </q-btn>
          <q-btn v-else unelevated rounded color="blue-1">
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <p class="texto-color-blue q-ml-xs q-mt-md">Jesus</p>
          </q-btn>

          <q-btn
            @click="buttonDerecha(2)"
            v-if="Appband"
            round
            dense
            text-color="black"
            color="grey-3"
            icon="apps"
          >
            <q-tooltip>Menu</q-tooltip>
          </q-btn>
          <q-btn
            v-else
            round
            dense
            text-color="blue"
            color="blue-1"
            icon="apps"
          >
            <q-tooltip>Menu</q-tooltip>
          </q-btn>
          <q-btn
            @click="ModifyMensages()"
            v-if="Messengerband"
            round
            dense
            text-color="black"
            color="grey-3"
            icon="chat_bubble"
          >
            <q-tooltip>Messenger</q-tooltip>
            <q-badge
              v-if="MessagesStore.unSeeMessages != 0"
              color="red"
              text-color="white"
              floating
            >
              {{ MessagesStore.unSeeMessages }}
            </q-badge>
          </q-btn>
          <q-btn
            v-else
            round
            dense
            text-color="blue"
            color="blue-1"
            icon="chat_bubble"
          >
            <q-tooltip>Messenger</q-tooltip>
          </q-btn>
          <q-btn
            @click="buttonDerecha(4)"
            v-if="Notificationsband"
            round
            dense
            text-color="black"
            color="grey-3"
            icon="notifications"
          >
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn
            v-else
            round
            dense
            text-color="blue"
            color="blue-1"
            icon="notifications"
          >
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn
            @click="buttonDerecha(5)"
            v-if="Acountband"
            round
            dense
            text-color="black"
            color="grey-3"
            icon="arrow_drop_down"
          >
            <q-tooltip>Account</q-tooltip>
          </q-btn>
          <q-btn
            v-else
            round
            dense
            text-color="blue"
            color="blue-1"
            icon="arrow_drop_down"
          >
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above bordered class="bg-grey-2" :width="240">
      <q-scroll-area class="fit">
        <q-list padding bordered>
          <q-item clickable v-if="$q.screen.gt.sm" class="q-mt-md" to="/Row">
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <text class="q-pl-xs">Jesus Garnica Ramos</text>
          </q-item>
          <q-separator class="q-my-md" />
          <q-item v-for="link in links1" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator class="q-my-md" />
          <q-toggle v-model="active" label="Active" />
          <q-item
            clickable
            v-ripple
            :active="active"
            active-class=" bg-teal-1 text-blue-6"
          >
            <q-item-section avatar>
              <q-icon name="signal_wifi_off" />
            </q-item-section>
            <q-item-section>Active</q-item-section>
            <q-item-section side>Side</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :active="active"
            active-class=" bg-teal-1 text-blue-6"
          >
            <q-item-section avatar>
              <q-icon name="signal_wifi_off" />
            </q-item-section>
            <q-item-section>Active</q-item-section>
            <q-item-section side>Side</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            :active="active"
            active-class="bg-teal-1 text-blue-6"
          >
            <q-item-section avatar>
              <q-icon name="signal_wifi_off" />
            </q-item-section>
            <q-item-section>Active</q-item-section>
            <q-item-section side>Side</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mdiFacebook } from "@mdi/js";
import { mdiHome } from "@mdi/js";
import { defineComponent } from "vue";
import { useMessagesStore } from "../stores/messages-store";
const MessagesStore = useMessagesStore();
export default defineComponent({
  name: "FacebookLayout",
  data() {
    return {
      MessagesStore,
      clase: true,
      IconSearch: true,
      mdiFacebook,
      mdiHome,
      bandHome: false,
      bandWatch: false,
      bandStore: false,
      bandGroup: false,
      bandGames: false,
      Avatarband: false,
      active: true,
      Appband: true,
      Messengerband: true,
      Notificationsband: true,
      Acountband: true,

      links1: [
        { icon: "group", text: "Amigos" },
        { icon: "flag", text: "Paginas" },
        { icon: "update", text: "Mas recientes" },
        { icon: "storefront", text: "Marketplace" },
        { icon: "videogame_asset", text: "Video juegos" },
      ],
    };
  },
  methods: {
    ModifyMensages() {
      this.buttonDerecha(3);
      MessagesStore.SeeMessages();
    },
    Changue() {
      this.IconSearch = !this.IconSearch;
      this.clase = !this.clase;
    },
    blueButton(n) {
      if (n == 1) {
        this.bandHome = true;
        this.bandWatch = false;
        this.bandStore = false;
        this.bandGroup = false;
        this.bandGames = false;
        this.Avatarband = false;
      } else if (n == 2) {
        this.bandHome = false;
        this.bandWatch = true;
        this.bandStore = false;
        this.bandGroup = false;
        this.bandGames = false;
        this.Avatarband = false;
      } else if (n == 3) {
        this.bandHome = false;
        this.bandWatch = false;
        this.bandStore = true;
        this.bandGroup = false;
        this.bandGames = false;
        this.Avatarband = false;
      } else if (n == 4) {
        this.bandHome = false;
        this.bandWatch = false;
        this.bandStore = false;
        this.bandGroup = true;
        this.bandGames = false;
        this.Avatarband = false;
      } else if (n == 5) {
        this.bandHome = false;
        this.bandWatch = false;
        this.bandStore = false;
        this.bandGroup = false;
        this.bandGames = true;
        this.Avatarband = false;
      } else {
        this.bandHome = false;
        this.bandWatch = false;
        this.bandStore = false;
        this.bandGroup = false;
        this.bandGames = false;
        this.Avatarband = true;
      }
    },
    buttonDerecha(n) {
      if (n == 1) {
        this.Appband = true;
        this.Messengerband = true;
        this.Notificationsband = true;
        this.Acountband = true;
      } else if (n == 2) {
        this.Appband = false;
        this.Messengerband = true;
        this.Notificationsband = true;
        this.Acountband = true;
      } else if (n == 3) {
        this.Appband = true;
        this.Messengerband = false;
        this.Notificationsband = true;
        this.Acountband = true;
      } else if (n == 4) {
        this.Appband = true;
        this.Messengerband = true;
        this.Notificationsband = false;
        this.Acountband = true;
      } else {
        this.Appband = true;
        this.Messengerband = true;
        this.Notificationsband = true;
        this.Acountband = false;
      }
    },
  },
});
</script>
<style>
.fondo {
  background-color: rgb(235, 235, 240);
}
.capas {
  position: absolute;
  z-index: 1;
}
.InputSearch {
  border-radius: 100px;
  border: 0px solid #000000;
  background-color: rgb(235, 235, 240);
  height: 40px;
  width: 220px;
  outline: none !important;
  text-align: center;
}
.InputSearchOn {
  border-radius: 100px;
  border: 0px solid #000000;
  background-color: rgb(235, 235, 240);
  height: 40px;
  width: 220px;
  outline: none !important;
  text-align: left;
}
.Alinear {
  margin-left: 40px;
}
.texto-color {
  color: #000000;
}
.texto-color-blue {
  color: #0068f0;
}
.VistaBotones {
  border-bottom: 4px #0068f0 solid;
}
</style>