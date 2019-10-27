<template lang="pug">
  layout
    b-container
      b-row(align-h='center')
        b-col(cols='8')
          img.greet-image(src="../../uploads/beerbeerbeer.jpg")

      b-row(align-h='center')
        b-col(cols='6')
          g-link(
            :to="item.node.path"
            v-for="item in $page.beer.edges"
            :key="item.node.id"
            class="beer-post"
            )
            .media
              .media-body
                h5.mt-0 {{item.node.title}}
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
        title
        excerpt
        image
      }
    }
  }
}
</page-query>

<style>
.greet-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
