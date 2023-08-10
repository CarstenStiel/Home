<template>
  <div class="flex flex-col text-center">
    <Button :myFunctions="[setStatus]" buttonText="Daten abrufen"
      >Licht an/aus</Button
    >
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
    this.setUrl = `http://${this.bridgeIP}/api/${this.username}/lights/1/state`;
  },
  data() {
    return {
      jsonData: null,
      username: "",
      bridgeIP: "",
      showDiv: false,
      status: true,
      url: "",
      setUrl: "",
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
    },
    toggleDiv() {
      this.showDiv = !this.showDiv;
    },
    hueInfo: function () {
      return information.hue;
    },
    setStatus() {
      console.log(this.setUrl);
      console.log(this.status);

      const requestOptions = {
        method: "PUT",
        //prettier-ignore
        body: JSON.stringify({ "on": this.status }),
      };
      fetch(this.setUrl, requestOptions).then((response) =>
        console.log(response.json())
      );

      this.status = !this.status;
    },
  },
};
</script>
