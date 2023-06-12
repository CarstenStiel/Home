<template>
  <div class="flex items-center justify-center h-screen flex-col">
    <div class="text-xl text-center">Hier sollen die Geräte eingestellt werden können!</div>
    <Button :my-function='toggleDiv'>Test</Button>
    <div v-if="showDiv" class="text-center">Test</div>
  </div>
</template>

<script>
import Button from "@/components/buttons/defaultButton.vue";

export default {
  components: { Button },
  data() {
    return {
      showDiv: false
    };
  },
  methods: {
    toggleDiv() {
      this.showDiv = !this.showDiv;
    }
  }
};
</script>