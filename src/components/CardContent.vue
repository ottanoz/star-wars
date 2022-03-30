<template>
  <v-card class="card-content">
    <v-img
      contain
      class="card-content__header-img white--text align-end py-md-2"
      src="../assets/sky.png"
    >

      <v-card-title class="card-content__title">{{ character.name }}</v-card-title>
    </v-img>
    <v-card-subtitle class="card-content__subtitle">{{ description }}</v-card-subtitle>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <div class="mb-2">
        Height: {{ character.height | heightFormatted }} <br>
        Weight: {{ character.mass }}kg
      </div>
      <i>Appears in {{ character.films.length }} films</i>
    </v-card-text>
    <v-card-actions class="d-flex align-end pa-0 mb-0">
      <v-btn
        class="card-content__button mb-0 mx-0"
        text
        block
        :to="`/character/${characterId}`"
      >
        Go to character
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import descriptionMixin from '@/mixins/descriptionMixin';

export default {
  name: 'CardContent',

  mixins: [descriptionMixin],

  props: {
    character: {
      type: Object,
      required: true,
    },
  },

  computed: {
    characterId() {
      const id = this.character.url.split('/people/')[1];
      return id;
    },
  },
};
</script>

<style lang="stylus" scoped>
.card-content
  flex-direction: column
  width 400px
  margin: 0 auto
  &__header-img
    background-color: sw-black
    max-height: 100px
  &__title
    -webkit-text-stroke-width: 0.5px
    -webkit-text-stroke-color: sw-yellow
  &__subtitle
    min-height: 76px
    &:first-letter
      text-transform: capitalize
  &__button
    &:hover
      color: sw-yellow

@media screen and (min-width: 1600px)
  .card-content
    width: auto
@media screen and (max-width: 1599px)
  .card-content
    &__subtitle
      min-height: 98px
@media screen and (max-width: 480px)
  .card-content
    &__subtitle
      min-height: auto
    &__button
      height 48px !important
</style>
