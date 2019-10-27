<template lang="pug">
  layout
    b-container.main
      b-row(align-h='center')
        b-col(cols='8')
          h1 Beers! Beers! Beers!

      b-row(align-h='center')
        b-card-group(deck)
          g-link(
            :to="item.node.path"
            v-for="item in $page.beer.edges"
            :key="item.node.id"
            class="beer-post"
            )
            b-card.beer-card(
              :title="item.node.name"
              :sub-title="item.node.brewery"
              :img-src="item.node.image"
              img-top
            )
              b-card-text
                h5 Test Beer card
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
      }
    }
  }
}
</page-query>

<style lang="stylus">
.beer-card
  background #ffffff
.greet-image
  display block
  margin auto
  max-width 500px
  padding-bottom 50px
  width 90%
</style>
