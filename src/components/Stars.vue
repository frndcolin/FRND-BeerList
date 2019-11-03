<template lang="pug">
  .stars(:style='{color: starColor}')
    span.name {{ `${ratedBy}: ` }}
    span.star {{ rating - 1 >= 0 ? '&#9733;' : '&#9734;' }}
    span.star {{ rating - 2 >= 0 ? '&#9733;' : '&#9734;' }}
    span.star {{ rating - 3 >= 0 ? '&#9733;' : '&#9734;' }}
    span.star {{ rating - 4 >= 0 ? '&#9733;' : '&#9734;' }}
    span.star {{ rating - 5 >= 0 ? '&#9733;' : '&#9734;' }}
</template>

<script>
export default {
  props: {
    ratingScore: {
      type: String,
      default: "0"
    },
    ratedBy: {
      type: String,
      default: "Rated by"
    },
    starColor: {
      type: String,
      default: "yellow"
    }
  },
  computed: {
    rating() {
      return Number(this.ratingScore);
    }
  }
};
</script>

<style lang="stylus">
.stars
  display flex
.star
  margin 0 1px
.name
  color #9f9f9f
  margin-right 2px
</style>
