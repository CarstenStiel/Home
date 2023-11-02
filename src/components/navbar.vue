<template>
  <header class="absolute w-full z-30 backdrop-blur-sm">
    <div
      class="max-w-7xl mx-auto flex flex-col relative text-base text-gray-200"
    >
      <div class="flex items-center justify-between py-4 px-6 h-20">
        <div class="flex-shrink-0 mr-4 w-64">
          <h1 class="text-xl">{{ project }}</h1>
        </div>
        <nav class="flex flex-grow">
          <ul class="flex flex-grow justify-center flex-wrap items-center">
            <li class="flex flex-col items-center group mx-6">
              <router-link to="/" class="my-link" active-class="my-link-active">
                Home
              </router-link>
            </li>
            <li class="flex flex-col items-center group mx-6">
              <router-link
                to="/devices"
                class="my-link"
                active-class="my-link-active"
                >Geräte</router-link
              >
            </li>
            <li class="flex flex-col items-center group mx-6">
              <router-link
                to="/test"
                class="my-link"
                active-class="my-link-active"
              >
                GitTest
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="xl:flex justify-end z-10 space-x-4 w-64 items-center">
          <router-link
            to="/settings"
            class="p-4 font-bold rounded-full text-lg bg-indigo-600 hover:bg-indigo-800 transition-all duration-500 ease-in-out"
          >
            Settings
          </router-link>

          <router-link
            to="/about"
            class="px-4 text-lg border-b-0 border-transparent transition duration-500 hover:border-b-2 hover:border-b-indigo-600"
            >About</router-link
          >
        </div>
      </div>
      <!---->
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return { project: "Zuhause" };
  },
};
</script>

<style scoped>
.my-link {
  font-weight: 500;
  //color: rgb(79 70 229);
  /* Textsize=xl */
  font-size: 1.25rem;
  line-height: 1.75rem;
  border-bottom: 0px solid transparent; /* Anfangszustand: transparent */
  transition: border-bottom-color 0.5s; /* Übergangseigenschaften für die Farbe */
}

.my-link:hover {
  /* Endzustand: weiß */
  border-bottom: 1.5px solid;
}

.my-link-active {
  font-weight: bold;
  color: indigo;
  border-bottom: 2px solid;
  border-bottom-color: indigo;
}
</style>
