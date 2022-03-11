<template>
  <v-app>
    <core-app-bar />
    <core-drawer />
    <core-view />
    <core-settings />
  </v-app>
</template>

<script>
export default {
  name: "Index",

  components: {
    CoreAppBar: () => import("./layout/AppBar"),
    CoreDrawer: () => import("./layout/Drawer"),
    CoreSettings: () => import("./layout/Settings"),
    CoreView: () => import("./layout/View"),
  },

  data: () => ({
    expandOnHover: false,
  }),
};
</script>
