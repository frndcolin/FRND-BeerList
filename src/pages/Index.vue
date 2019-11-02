<template lang="pug">
  layout
    b-container.main
      b-row(align-h='center')
        b-col(cols='8')
          h1.title Beers! Beers! Beers!
      b-row(align-h='center')
        b-col(cols='6')
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
</template>

<script>
export default {
  metaInfo: {
    title: "FRND-Beer-List"
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
    color #9f9f9f
    font-size 14px
    position absolute
    right 8px
    top 4px
  &--name
    color #6a6a6a
    font-size 24px
    font-weight bold
    letter-spacing 0.025em
  &--brewery
    color #a7a7a7
    font-size 20px
    font-weight 600
    letter-spacing 0.025em
    padding-top 4px
  &--wrapper
    list-style none
    padding 40px 0 0 0
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
</style>
