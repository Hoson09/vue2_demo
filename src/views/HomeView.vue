<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <tableComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import tableComponent from "@/components/tableComponent.vue";

export default {
  name: "HomeView",
  components: {
    tableComponent,
  },
};
</script>
