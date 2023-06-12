<template>
  <div>
    <button @click="toggleDiv" class="bg-slate-200 rounded full px-2 ease-in duration-200 hover:bg-slate-400">Button</button>
    <div v-if="showDiv" class="text-center">Test</div>
  </div>
</template>

<script>
export default {
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