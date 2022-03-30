<template>
  <v-card
    class="mx-md-6"
  >
    <v-img
      height="256"
      src="../assets/bg-details.jpg"
      class="card-character-details__image fill-height"
    >
      <v-row
        align="end"
        class="card-character-details__row fill-height"
      >
        <v-col
          align-self="start"
          md="10"
          class="card-character-details__col"
        >
          <v-avatar
            class="card-character-details__profile"
            size="120"
          >
            <v-img src="../assets/profile.jpg" contain></v-img>
          </v-avatar>
          <v-card-title
            class="card-character-details__title pl-0"
          >
            {{ character.name }}
          </v-card-title>
          <v-card-subtitle
            class="card-character-details__subtitle pl-0"
          >{{ character.homeworld }}</v-card-subtitle>
        </v-col>
        <v-col
          md="2"
          class="align-self-start align-self-sm-end"
        >
          <v-card-subtitle
            class="card-character-details__subtitle
              card-character-details__subtitle--right pl-0"
          >{{ description }}</v-card-subtitle>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
import descriptionMixin from '@/mixins/descriptionMixin';

export default {
  name: 'CardCharacterDetails',

  mixins: [descriptionMixin],

  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
.card-character-details
  &__image
    padding: 24px;
  &__profile
    margin-top 18px
  &__title
    color: white
  &__subtitle
    color: rgba(256, 256, 256, 0.8)
    font-style: italic
    &--right
      text-align: right;
    &:first-letter
      text-transform: capitalize
@media screen and (max-width: 480px)
  .card-character-details
    &__title
      color: white
      font-size: unit(16/16, 'rem')
    &__subtitle
      color: white
      font-size: unit(14/16, 'rem')
</style>
