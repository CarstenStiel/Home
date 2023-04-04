<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbarTop";

export default {
  components: { Navbar },
};
</script>
