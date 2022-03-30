<template>
  <v-app>
    <v-app-bar
      app
      dark
      elevate-on-scroll
      class="app-bar"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Star Wars Logo"
          class="shrink mr-2"
          contain
          src="./assets/star-wars-logo.png"
          transition="scale-transition"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/ottanoz/star-wars"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="blue-grey lighten-5">
      <router-view/>
    </v-main>

    <v-footer
      dark
    >
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/ottanoz/star-wars"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      drawer: null,
    };
  },
};
</script>

<style lang="stylus" scoped>
.app-bar
  background-color: sw-black
</style>
