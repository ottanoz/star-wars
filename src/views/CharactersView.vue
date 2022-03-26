<template>
  <div class="characters">
    <h1>Characters</h1>
    <div v-for="(char, index) in characters" :key="index">
      {{ char.name }}
    </div>
    <button v-if="getPreviousPage" @click="next(getPreviousPage)">Previous</button>
    <button v-if="getNextPage" @click="next(getNextPage)">Next</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CharactersView',

  computed: {
    ...mapGetters([
      'getCharactersFromPage',
      'getPreviousPage',
      'getNextPage',
    ]),

    characters() {
      return this.getCharactersFromPage;
    },
  },

  created() {
    this.fetchPageOfCharacters();
  },

  methods: {
    ...mapActions([
      'fetchPageOfCharacters',
    ]),

    next(path) {
      this.fetchPageOfCharacters(path);
    },
  },
};
</script>
