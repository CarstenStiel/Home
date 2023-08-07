<template>
  <div class="flex flex-col h-screen">
    <div class="mt-20 w-full">
      <!-- Dies dient nur dazu die Navbar zu berücksichtigen -->
    </div>
    <div class="flex flex-row h-full">
      <div class="h-full w-1/2 bg-amber-100 flex flex-col items-center">
        <div class="text-xl mt-20">
          Hier sollen die Hue Geräte eingestellt werden können!
        </div>
        <Devices></Devices>
      </div>
      <div class="h-full w-1/2 bg-lime-100 flex flex-col items-center">
        <div class="text-xl mt-20">Platzhalter für Ideen!</div>
      </div>
    </div>
  </div>
</template>

<script>
import Devices from "@/devices/test.vue";

export default {
  name: "TestView",
  components: {
    Devices,
  },
};
</script>
