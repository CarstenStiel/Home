<template>
  <div>
    <div class="fixed w-full h-20 shadow-xl">
      <div class="flex justify-between items-center w-full h-full px-8">
        <h1>{{ project }}</h1>
        <div>
          <nav>
            <router-link to="/" class="my-link" active-class="my-link-active"
              >Home</router-link
            >
            <span class="link-gap text-center">|</span>
            <router-link
              to="/about"
              class="my-link"
              active-class="my-link-active"
              >About</router-link
            >
            <span class="link-gap text-center">|</span>
            <router-link
              to="/deviceView"
              class="my-link"
              active-class="my-link-active"
              >Geräte</router-link
            >
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { project: "Zuhause" };
  },
};
</script>

<style scoped>
nav {
  font-weight: bold;
  color: #2c3e50;
}

.link-gap {
  display: inline-block;
  width: 20px; /* adjust this value to change the size of the gap */
}

.my-link:hover {
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid;
}

.my-link-active {
  color: #42b983;
  border-bottom: 1px solid;
}
</style>
