<template lang="pug">
  layout
    h1 Beers!
    g-link(
      :to="item.node.path"
      v-for="item in $page.beer.edges"
      :key="item.node.id"
      class="beer-post"
      )
      .media
        g-image.mr-3(immediate :src="item.node.image" alt="image")
        .media-body
          h5.mt-0 {{item.node.title}}
          p.text-dark {{item.node.excerpt}}
</template>

<page-query>
query Beer {
	beer: allBeerPost(sortBy: "date") {
    edges {
      node {
        id
        path
        title
        excerpt
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
