<template>
  <div style="grid-auto-columns: auto">
    <div>{{ name_first }}, {{ name_last }}, {{ alter }}, {{ gender }},</div>
    <hr />
    <div>
      <u>
        {{ `Name: ${name_first} ${name_last} , Alter: ${alter}` }}
      </u>
    </div>
    <hr />
    <div>
      {{ fullName }}
    </div>
    <hr />
    <div class="age">
      {{ alter > 18 ? "volljährig" : "minderjährig" }}
    </div>
    <hr />
    <span v-if="alter > 18">{{ alter }}... Du bist über 18 Jahre alt!</span>
    <span v-else-if="alter == 18">Du bist 18 Jahre alt!</span>
    <div v-else>Du bist minderjährig</div>
    <hr />
    <div v-show="name_first == 'Timothy'">Test</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    name_first: "Timothy",
    name_last: "Kriewald",
    alter: 23,
    gender: "männlich",
  }),
  computed: {
    fullName() {
      return this.name_first + " " + this.name_last;
    },
  },
};
</script>

<style>
.age {
  border: 1px solid #f00;
  margin: 5px;
  padding: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
