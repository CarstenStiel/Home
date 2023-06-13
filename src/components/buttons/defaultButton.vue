<template>
  <div>
    <button @click="callFunctions" class="bg-slate-200 rounded-full p-2 ease-in duration-200 hover:bg-slate-400">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    myFunctions: {
      type: Array,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  },
  methods: {
    callFunctions() {
      this.myFunctions.forEach(func => func()); // Aufruf aller Funktionen in myFunctions
    }
  }
};
</script>