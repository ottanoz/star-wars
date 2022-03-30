<template>
  <v-app>
    <v-app-bar
      app
      dark
      elevate-on-scroll
      class="app-bar"
    >
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Star Wars Logo"
            class="shrink mr-2"
            contain
            src="./assets/star-wars-logo.png"
            transition="scale-transition"
            width="100"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-switch
        v-model="toggleDarkMode"
        inset
        label="Dark mode"
        class="mt-5"
      ></v-switch>
    </v-app-bar>

    <v-main
      v-dark-mode
      class="main-content"
    >
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
      toggleDarkMode: false,
    };
  },

  mounted() {
    this.toggleDarkMode = localStorage.getItem('toggleDarkMode') === 'true';
  },

  watch: {
    toggleDarkMode(value) {
      localStorage.setItem('toggleDarkMode', value);
    },
  },
};
</script>

<style lang="stylus" scoped>
.app-bar
  background-color: app-bar-color !important
.main-content
  background-color: main-bg-color
</style>
