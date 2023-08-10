<template>
  <div class="flex flex-col text-center">
    <Button :myFunctions="[setStatus]" buttonText="Licht an/aus"></Button>
  </div>
</template>

<script>
import Button from "@/components/buttons/defaultButton.vue";
import information from "@/data/sensitiveData.json";
export default {
  name: "Devices",
  components: {
    Button: Button,
  },
  created() {
    this.username = this.hueInfo().username;
    this.bridgeIP = this.hueInfo().bridgeIP;
    this.url = `http://${this.bridgeIP}/api/${this.username}/lights/`;
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      jsonData: null,
      username: "",
      bridgeIP: "",
      status: true,
      url: "",
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(this.url);
        if (!response.ok) {
          throw new Error("Fehler beim Abrufen der Daten.");
        }
        this.jsonData = await response.json();
      } catch (error) {
        console.error("Fehler:", error.message);
      }
      console.log("Fetch durchgeführt!");
    },
    toggleDiv() {
      this.showDiv = !this.showDiv;
    },
    hueInfo: function () {
      return information.hue;
    },
    setStatus() {
      const requestOptions = {
        method: "PUT",
        //prettier-ignore
        body: JSON.stringify({ "on": this.status }),
      };

      // Schleife durch die Lampen-IDs und aktualisiere den Zustand
      for (const lampId in this.jsonData) {
        const setUrl = `http://${this.bridgeIP}/api/${this.username}/lights/${lampId}/state`;

        console.log(setUrl);

        fetch(setUrl, requestOptions).then((response) =>
          console.log(response.json())
        );
      }

      this.status = !this.status;
    },
  },
};
</script>
