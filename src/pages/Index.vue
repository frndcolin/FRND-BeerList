<template lang="pug">
  layout
    b-container.main
      b-row(align-h='center')
        b-col(cols='8')
          h1.title Beers! Beers! Beers!
      b-row(align-h='center')
        b-col(cols='12' sm='10' md='6')
          ul.beer-card--wrapper
            li.beer-card(
              v-for="item in $page.beer.edges"
              :key="item.node.id"
              )
              .beer-card--thumbnail
                img(:src="item.node.image.src")
              .beer-card--content
                g-link.beer-card--name(:to="item.node.path") {{ item.node.name }}
                span.beer-card--date {{ item.node.date.split('T')[0] }}
                p.beer-card--brewery.
                  {{ item.node.brewery }}
                .beer-card--stars
                  stars(:ratingScore='item.node.colin_rating' ratedBy='Colin' starColor='blue')
                  stars(:ratingScore='item.node.caitie_rating' ratedBy='Caitie' starColor='orange')
</template>

<script>
import Stars from "@/components/Stars.vue";

export default {
  components: { Stars },
  metaInfo: {
    title: "Friend Beer List"
  }
};
</script>

<page-query>
query Beer {
	beer: allBeerPost(sortBy: "date") {
    edges {
      node {
        id
        path
        name
        brewery
        image
        date
        colin_rating
        caitie_rating
      }
    }
  }
}
</page-query>

<style lang="stylus">
.title
  color #fefefe
  font-weight bold
  padding-top 24px
  text-align center
  text-transform uppercase
.beer-card
  background #ffffff
  border-radius 6px
  display flex
  margin 16px 0
  padding 8px
  &--content
    flex 1
    padding-left 24px
    position relative
  &--date
    color #cfcfcf
    font-size 10px
    position absolute
    right 8px
    top 4px
  &--name
    color #6a6a6a
    font-size 24px
    font-weight bold
    letter-spacing 0.025em
  &--brewery
    color #a3a3a3
    font-size 16px
    font-weight 600
    letter-spacing 0.025em
    margin-top 2px
  &--wrapper
    list-style none
    padding 40px 0 0 0
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
      height 100px
      width 100px
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
