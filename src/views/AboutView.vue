<template>
  <div class="top flex flex-col">
    <div class="bgDiv h-full flex flex-col">
      <div class="mt-20 w-full" id="navbarSpace">
        <!-- Dies dient nur dazu, die Navbar zu berücksichtigen -->
      </div>
      <div class="flex flex-grow flex-col mx-5">
        <div class="h-1/2 w-full flex items-center">
          <div
            class="w-fit h-fit lg:text-2xl tracking-wide uppercase text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-md p-2"
          >
            Willkommen Zuhause! Hier werden allgemeine Informationen
            dargestellt!
          </div>
        </div>
        <div class="h-1/2 w-full flex items-center justify-end">
          <div
            class="w-fit h-fit lg:text-2xl tracking-wide uppercase text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-md p-2"
          >
            Willkommen Zuhause! Hier werden allgemeine Informationen
            dargestellt!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as url from "url";
export default {
  name: "AboutView",
  computed: {
    url() {
      return url;
    },
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
  height: 75vh;
}
</style>
