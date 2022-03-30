<template>
  <v-container v-if="isLoading" class="character-loading text-center">
    <v-progress-circular
        indeterminate
        color="secondary"
        class="characters-loading__circle"
    ></v-progress-circular>
  </v-container>
  <v-container v-else class="character-details">
    <v-breadcrumbs
      :items="breadcrumbs"
      divider="/"
      class="character-details__breadcrumb"
    >
    </v-breadcrumbs>

    <CardCharacterDetails :character="character" />

    <h2 class="character-details__films text-center mt-10 mb-8">Films</h2>

    <v-timeline class="films-timeline mx-md-6 d-none d-sm-block">
      <v-timeline-item
        v-for="(film, index) in character.films"
        :key="film.episode_id"
        color="secondary"
        class="px-0"
      >
        <template v-slot:opposite>
          <span
            class="character-details__year headline font-weight-bold"
          >{{ film.release_date | yearFromData }}</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title
            :class="[ 'text-h5', 'd-block', 'font-weight-bold', { 'text-right': isEven(index) } ]">
            Episode {{ film.episode_id | episode }} - {{ film.title }}
          </v-card-title>
          <v-card-text :class="[ 'py-0', { 'text-right': isEven(index)}]">
            {{ film.director }}
          </v-card-text>
          <v-card-text :class="[ 'py-0', { 'text-right': isEven(index)}]">
            {{ film.producer }}
          </v-card-text>
          <v-card-text
            :class="{ 'text-right': isEven(index) }"
          >
            {{ film.opening_crawl }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-card
      class="film-cards elevation-2 d-block d-sm-none mb-8"
      v-for="film in character.films"
      :key="film.episode_id"
    >
      <v-card-title
        class="film-cards__title text-h5 d-block font-weight-bold">
        Episode {{ film.episode_id | episode }} - {{ film.title }}
      </v-card-title>
      <v-card-subtitle>
        {{ film.release_date | yearFromData }}
      </v-card-subtitle>
      <v-card-text class="py-0">
        {{ film.director }}
      </v-card-text>
      <v-card-text   class="py-0">
        {{ film.producer }}
      </v-card-text>
      <v-card-text class="film-cards__opening">
        {{ film.opening_crawl }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CardCharacterDetails from '../components/CardCharacterDetails.vue';

export default {
  name: 'CharacterDetails',

  components: {
    CardCharacterDetails,
  },

  computed: {
    ...mapGetters([
      'getCharacterDetails',
      'isLoading',
    ]),

    character() {
      return this.getCharacterDetails;
    },

    breadcrumbs() {
      return [
        {
          text: 'Characters',
          to: '/',
        },
        {
          text: this.character.name,
          disabled: true,
        },
      ];
    },
  },

  created() {
    this.fetchCharacterDetails(this.$route.params.id);
  },

  methods: {
    ...mapActions([
      'fetchCharacterDetails',
    ]),

    isEven(index) {
      return index % 2 === 0;
    },
  },
};
</script>

<style lang="stylus" scoped>
.characters-loading
  &__circle
    margin-top 128px

@media screen and (max-width: 480px)
  .film-cards
    &__title
      font-size: unit(20/16, 'rem') !important
    &__opening
      text-align: justify;
</style>
