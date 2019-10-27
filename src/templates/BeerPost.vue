<template lang="pug">
  layout
    g-image.beerImage.mb-4(immediate :src="$page.post.image")
    .beerPost
      h1.mb-4( v-html="$page.post.name")
      .meta
        .box.author
          span.label Author
          span.author-name(v-text="$page.post.brewery")
        .box.date
          span.label Date
          div(v-text="new Date($page.post.date).toLocaleDateString()")
        .box.time
          span.label Time
          span {{ $page.post.timeToRead }} min read
      beer-content.mt-5(:content="$page.post.content")
</template>

<page-query>
query BeerPost ($path: String!) {
  post: beerPost (path: $path) {
    name
    brewery
    date
    timeToRead
    content
    image
  }
}
</page-query>

<script>
import BeerContent from "@/components/BeerContent";

export default {
  components: {
    BeerContent
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style lang="stylus" scoped>
.meta
  display flex
.box
  display flex
  flex-direction column
  padding 0 20px 0 0
  .label
    font-weight bold
.beerImage
  max-height 400px
  width 100%
</style>
