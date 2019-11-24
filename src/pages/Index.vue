<template lang="pug">
  layout
    b-container.main
      b-row(align-h='center')
        b-col(cols='8')
          h1.title Beers! Beers! Beers!
      b-row(align-h='center')
        b-col(cols='12' sm='10' md='6')
          beer-card(v-for='beer in $page.beer.edges' :beer='beer.node' :key='beer.node.id')
</template>

<page-query>
query Beer {
	beer: allBeerPost(sortBy: "date") {
    edges {
      node {
        id
        path
        name
        brewery
        image (width: 120, height: 120, quality: 90)
        date
        colin_rating
        caitie_rating
      }
    }
  }
}
</page-query>

<script>
import BeerCard from "@/components/BeerCard.vue";

export default {
  components: { BeerCard },
  metaInfo: {
    title: "Friend Beer List"
  }
};
</script>

<style lang="stylus">
.title
  color #fefefe
  font-weight bold
  padding-top 24px
  text-align center
  text-transform uppercase
</style>
