<template>
  <div class="flex flex-col h-screen">
    <div class="mt-20 w-full">
      <!-- Dies dient nur dazu die Navbar zu berücksichtigen -->
    </div>
    <div class="h-1/2 w-full bg-amber-100 flex flex-row items-center">
        <img alt="Vue logo" class="ml-10" src="../assets/logo.png" />
        <div class="text-xl ml-10 text-center">
          Willkommen Zuhause! Hier werden allgemeine Informationen dargestellt.
        </div>
    </div>
    <div class="h-1/2 w-full bg-lime-100 flex flex-row-reverse items-center">
      <img alt="Vue logo" class="mr-10" src="../assets/logo.png" />
      <div class="text-xl mr-10">
        Dies ist ein Platzhalter für spätere Informationen!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
/* Optional: You can add styles for the parent div and/or the image */
</style>
