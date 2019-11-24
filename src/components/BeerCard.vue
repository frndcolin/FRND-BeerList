<template lang="pug">
  .beer-card
    .beer-card--thumbnail
      img(:src="beer.image.src")
    .beer-card--wrapper
      .beer-card--content
        g-link.beer-card--name(:to="beer.path") {{ beer.name }}
        span.beer-card--date {{ beer.date.split('T')[0] }}
        g-link.beer-card--brewery(:to="'/brewery/' + beer.brewery.toLowerCase()") {{ beer.brewery }}
      .beer-card--stars
        stars(:ratingScore='beer.colin_rating' ratedBy='Colin' starColor='blue')
        stars(:ratingScore='beer.caitie_rating' ratedBy='Caitie' starColor='orange')
</template>

<script>
import Stars from "@/components/Stars.vue";

export default {
  components: { Stars },
  props: {
    beer: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="stylus">
.beer-card
  background #ffffff
  border-radius 6px
  display flex
  margin 16px 0
  padding 8px
  &--content
    display flex
    flex-direction column
    padding-left 16px
    position relative
  &--date
    color #cfcfcf
    font-size 10px
    position absolute
    right 8px
    top 4px
  &--name
    color #6a6a6a
    font-size 20px
    font-weight 600
    letter-spacing 0.025em
  &--brewery
    color #a3a3a3
    font-size 16px
    font-weight 600
    letter-spacing 0.025em
    margin-top 2px
  &--wrapper
    display flex
    flex-direction column
    justify-content space-between
    width 100%
  &--stars
    display flex
    justify-content flex-end
    line-height 0.85em
    div
      margin-left 16px
  &--thumbnail
    position relative
    img
      border-radius 4px
    &::before
      background-image linear-gradient(to bottom, #a0a0a0, #666666)
      border-radius 4px
      content ''
      height 100%
      left 0
      opacity 0.5
      position absolute
      top 0
      width 100%
@media only screen and (max-width: 600px)
  .beer-card--content
    padding-left 0
  .beer-card--thumbnail
    display none
  .beer-card--stars
    font-size 12px
</style>
