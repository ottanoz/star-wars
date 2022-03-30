<template>
  <div class="pagination">
    <v-btn
      small
      @click="$emit('previous', previousPage)"
      :disabled="isLoading || !previousPage"
      class="pagination__previous"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn
      small
      v-for="page in numberOfPages"
      :key="page"
      @click="$emit('getPage', page)"
      :class="[ 'pagination__page',
        { 'pagination--active': isInThisPage(page), 'pagination--hide': hidePage(page) }
      ]"
      :disabled="isLoading"
    >
      {{ page }}
    </v-btn>
    <v-btn
      small
      @click="$emit('next', nextPage)"
      :disabled="isLoading || !nextPage"
      class="pagination__next"
    >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'CardPagination',

  props: {
    numberOfPages: {
      type: Number,
      required: true,
    },

    currentPage: {
      type: Number,
      required: true,
    },

    previousPage: {
      type: String,
    },

    nextPage: {
      type: String,
    },

    isLoading: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    isInThisPage(page) {
      return this.currentPage === page;
    },

    hidePage(page) {
      return (page > this.currentPage + 1 || page < this.currentPage - 1)
        && page !== 1 && page !== this.numberOfPages;
    },
  },
};
</script>

<style lang="stylus" scoped>
.pagination
  .v-btn
    margin: 0 2px
  &--active
    background-color: sw-yellow !important
    pointer-events: none;
  &--hide
    display: none
@media screen and (max-width: 480px)
  .pagination
    .v-btn
      height 48px
      width: 96px
    &__page
      &:not(.pagination--active)
        display: none
</style>
