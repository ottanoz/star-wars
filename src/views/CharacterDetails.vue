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
    <v-card
      class="mx-md-6"
    >
      <v-img
        height="256"
        src="../assets/bg-details.jpg"
        class="character-details__card-image fill-height"
      >
        <v-row
          align="end"
          class="character-details__card-row fill-height"
        >
          <v-col
            align-self="start"
            md="10"
            class="character-details__card-col"
          >
            <v-avatar
              class="character-details__profile"
              size="120"
            >
              <v-img src="../assets/profile.jpg" contain></v-img>
            </v-avatar>
            <v-card-title
              class="character-details__card-title pl-0"
            >
              {{ character.name }}
            </v-card-title>
            <v-card-subtitle
              class="character-details__card-subtitle pl-0"
            >{{ character.homeworld }}</v-card-subtitle>
          </v-col>
          <v-col
            md="2"
            class="align-self-start align-self-sm-end"
          >
            <v-card-subtitle
              class="character-details__card-subtitle character-details__card-subtitle--right pl-0"
            >{{ description }}</v-card-subtitle>
          </v-col>
        </v-row>
      </v-img>
    </v-card>

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
import descriptionMixin from '@/mixins/descriptionMixin';

export default {
  name: 'CharacterDetails',

  mixins: [descriptionMixin],

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
.character-details
  &__card-image
    padding: 24px;
  &__profile
    margin-top 18px
  &__card-title
    color: white
  &__card-subtitle
    color: rgba(256, 256, 256, 0.8)
    font-style: italic
    &--right
      text-align: right;
    &:first-letter
      text-transform: capitalize

@media screen and (max-width: 480px)
  .character-details
    &__card-title
      color: white
      font-size: unit(16/16, 'rem')
    &__card-subtitle
      color: white
      font-size: unit(14/16, 'rem')
  .film-cards
    &__title
      font-size: unit(20/16, 'rem') !important
    &__opening
      text-align: justify;
</style>
