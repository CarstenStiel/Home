<template>
  <div class="flex flex-col text-center">
    <Button :myFunctions="[fetchData, toggleDiv]" buttonText="Daten abrufen">Daten abrufen</Button>
    <ul v-if="showDiv">
      <li v-for="(value, key) in jsonData" :key="key">
        {{ value.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import Button from "@/components/buttons/defaultButton.vue";
import information from "@/data/sensitiveData.json";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Devices',
    components: {
    Button:Button,
  },
  data() {
    return {
      jsonData: null,
      username: this.hueInfo().username,
      bridgeIP: this.hueInfo().ip,
      showDiv: false
    };
  },
  methods: {
    async fetchData() {
      try {
        const url = `http://${this.bridgeIP}/api/${this.username}/lights/`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Fehler beim Abrufen der Daten.');
        }
        this.jsonData = await response.json();
      } catch (error) {
        console.error('Fehler:', error.message);
      }
    },
    toggleDiv() {
      this.showDiv = !this.showDiv;
    },
    hueInfo: function() {
      return information.hue;
    }
  }
};
</script>
