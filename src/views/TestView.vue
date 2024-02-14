<template>
  <div class="top flex flex-col">
    <div class="bgDiv h-full flex flex-col">
      <div class="mt-20 w-full" id="navbarSpace">
        <!-- Dies dient nur dazu, die Navbar zu berücksichtigen -->
      </div>
      <div class="flex flex-grow flex-col mx-5">
        <div class="h-full w-full flex items-center justify-center">
          <div
            class="w-fit h-fit lg:text-2xl tracking-wide uppercase text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-md p-2"
          >
            Dies ist ein Test!
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col h-screen">
    <div class="flex flex-row h-1/2 justify-center">
    </div>
  </div>
  <Fotter class="mt-10"></Fotter>
</template>

<script>
import Fotter from "@/components/footer.vue";

export default {
  components: {Fotter}
}
</script>

<style scoped>
.bgDiv {
  background-image: url("@/assets/beach.jpg");
  background-size: cover;
  background-position: center;
}
.top {
  height: 33vh;
}
</style>
