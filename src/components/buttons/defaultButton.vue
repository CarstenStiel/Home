<template>
  <div>
    <button @click="callFunction" class="bg-slate-200 rounded full px-2 ease-in duration-200 hover:bg-slate-400">Button</button>
  </div>
</template>

<script>
export default {
  props: {
    myFunction: {
      type: Function,
      required: true
    }
  },
  methods: {
    callFunction() {
      this.myFunction(); // Funktion aufrufen
    }
  }
};
</script>