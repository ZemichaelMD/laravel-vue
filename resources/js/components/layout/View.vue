<template>
  <v-content>
    <router-view />
    <core-footer />
  </v-content>
</template>

<script>
export default {
  name: "CoreView",

  components: {
    CoreFooter: () => import("./Footer"),
  },
};
</script>
