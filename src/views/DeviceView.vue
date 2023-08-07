<template>
  <div class="top flex flex-col">
    <div class="bgDiv h-full flex flex-col">
      <div class="mt-20 w-full" id="navbarSpace">
        <!-- Dies dient nur dazu, die Navbar zu berücksichtigen -->
      </div>
      <div class="flex flex-grow flex-col mx-5">
        <div class="h-full w-full flex items-center justify-center">
          <div
            class="w-fit h-fit lg:text-2xl tracking-wide uppercase text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-md p-2"
          >
            Willkommen bei den Geräten! Hier wird die Anzahl der Geräte stehen!
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col h-screen">
    <div class="flex flex-row h-1/2 justify-center">
      <div
        class="h-full w-1/4 m-5 flex flex-col items-center rounded shadow-2xl"
      >
        <div class="text-xl mt-20">
          Hier sollen die Hue Geräte angezeigt werden!
        </div>
        <Devices class="mt-5"></Devices>
      </div>
      <div class="h-full w-1/4 m-5 bg-white flex flex-col rounded shadow-2xl">
        <div class="text-xl my-10 flex justify-center">Geräte im System:</div>
        <ul class="h-full w-full flex flex-col">
          <li
            v-for="(value, key) in jsonData"
            :key="key"
            class="text-center m-10 rounded"
          >
            {{ value.name }} - {{ check(value.state.on) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Footer class="mt-10"></Footer>
</template>

<script>
import Devices from "@/devices/hue.vue";
import Footer from "@/components/footer.vue";
import information from "@/data/sensitiveData.json";

export default {
  name: "TestView",
  components: {
    Footer,
    Devices,
  },
  data() {
    return {
      jsonData: null,
      username: this.hueInfo().username,
      bridgeIP: this.hueInfo().bridgeIP,
      showDiv: false,
    };
  },
  methods: {
    async fetchData() {
      try {
        const url = `http://${this.bridgeIP}/api/${this.username}/lights/`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Fehler beim Abrufen der Daten.");
        }
        this.jsonData = await response.json();
      } catch (error) {
        console.error("Fehler:", error.message);
      }
    },
    toggleDiv() {
      this.showDiv = !this.showDiv;
    },
    hueInfo: function () {
      return information.hue;
    },
    check(input) {
      if (input === true) {
        return "on";
      } else {
        return "off";
      }
    },
  },
  mounted() {
    this.fetchData(); // Die Methode zum Abrufen der API-Daten aufrufen
  },
};
</script>

<style scoped>
.bgDiv {
  background-image: url("@/assets/beach.jpg");
  background-size: cover;
  background-position: center;
}
.top {
  height: 33vh;
}
</style>
