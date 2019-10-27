<template lang="pug">
  layout
    b-container
      b-row
        b-col(cols='12')
          h1(style='text-align:center') Beers!
      b-row(align-h='center')
        b-col(cols='8')
          g-link(
            :to="item.node.path"
            v-for="item in $page.beer.edges"
            :key="item.node.id"
            class="beer-post"
            )
            .media
              g-image.mr-3(immediate :src="item.node.image" alt="image")
              .media-body
                h5.mt-0 {{item.node.name}}
                p.text-dark {{item.node.brewery}}
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
        image
      }
    }
  }
}
</page-query>

<style lang="stylus" scoped>
.media
  img
    height 120px
    width 120px
.media-body
  margin auto
</style>
