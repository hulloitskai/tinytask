<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from "@/Home.vue";

export default {
  name: "app",
  components: { Home }
};
</script>

<style lang="scss">
body {
  // Default fonts.
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  // prettier-ignore
  h1, h2, h3, h4, h5 {
    font-family: "Cabin", Helvetica, Arial, sans-serif;
  }
  p {
    margin: 0;
  }

  // Layout and whitespacing.
  margin: 0;
}
.flex {
  display: flex;
}
.col {
  flex-direction: column;
}
</style>
