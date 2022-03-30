<template>
  <v-container class="characters-view">
    <h1
      class="characters-view__title text-center mt-md-14 mt-sm-10 mb-md-10"
    >
      Who do you wanna find?
    </h1>
    <v-row>
      <v-col
        md="4"
        offset-md="4"
      >
        <v-text-field
          v-model="searchTerm"
          @keyup.enter="searchCharacter()"
          @click:clear="clearSearch()"
          solo
          label="Find you character"
          prepend-inner-icon="mdi-magnify"
          clearable
          class="characters-view__search-input"
        ></v-text-field>
      </v-col>
    </v-row>
    <div
      v-show="isLoading"
      :style="{ 'height': `${cardsContainerHeight}px` }"
      class="characters-view__loading-container text-center"
    >
      <v-progress-circular
        indeterminate
        color="secondary"
        class="characters-view__loading"
      ></v-progress-circular>
    </div>
    <v-row
      v-show="!isLoading"
      class="characters-view__cards-row"
      ref="charactersViewCardsRow"
    >
      <v-col
        v-for="(char, index) in characters"
        :key="index"
        lg="3"
        md="4"
        sm="6"
        class="characters-view__cards-col"
      >
        <CardContent :character="char" />
      </v-col>
    </v-row>
    <div class="text-center">
      <CardPagination
        :numberOfPages="numberOfPages"
        :currentPage="currentPage"
        :previousPage="getPreviousPage"
        :nextPage="getNextPage"
        :isLoading="isLoading"
        @next="next"
        @previous="previous"
        @getPage="getPage"
      />
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CardContent from '../components/CardContent.vue';
import CardPagination from '../components/CardPagination.vue';

export default {
  name: 'CharactersView',

  components: {
    CardContent,
    CardPagination,
  },

  data() {
    return {
      currentPage: 1,
      searchTerm: '',
      cardsContainerHeight: 200,
    };
  },

  computed: {
    ...mapGetters([
      'getCharactersFromPage',
      'getTotalCharacters',
      'getPreviousPage',
      'getNextPage',
      'isLoading',
    ]),

    characters() {
      return this.getCharactersFromPage;
    },

    numberOfPages() {
      return Math.ceil(this.getTotalCharacters / 10);
    },
  },

  created() {
    this.fetchPageOfCharacters();
  },

  watch: {
    isLoading(param) {
      if (param) {
        window.scrollTo(0, 0);
        this.cardsContainerHeight = this.$refs.charactersViewCardsRow.clientHeight;
      }
    },
  },

  methods: {
    ...mapActions([
      'fetchPageOfCharacters',
      'findCharacter',
    ]),

    previous(path) {
      this.currentPage -= 1;
      this.fetchPageOfCharacters(path);
    },

    next(path) {
      this.currentPage += 1;
      this.fetchPageOfCharacters(path);
    },

    getPage(pageNumber) {
      this.currentPage = pageNumber;
      this.fetchPageOfCharacters(`/people/?page=${pageNumber}`);
    },

    searchCharacter() {
      this.currentPage = 1;
      this.findCharacter(this.searchTerm);
    },

    clearSearch() {
      this.currentPage = 1;
      this.getPage(1);
    },
  },
};
</script>

<style lang="stylus" scoped>
.characters-view
  &__loading-container
    margin-top 320px
  &__title
    &.dark-mode
      color: white
.pagination
  margin: 40px 0
</style>
