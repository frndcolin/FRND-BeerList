<template lang="pug">
  layout
    b-container.beer-post
      b-row(align-h='center')
        b-col(cols='12' md='5')
          b-card(
            :img-src="$page.post.image.src"
            img-height='320px'
            :title="$page.post.name"
            :sub-title='$page.post.brewery'
          )
            b-card-text {{ $page.post.description || '' }}
            b-card-text {{ $page.post.hops || '' }}
            b-card-text
              p.stars.
                {{ $page.post.colin_rating - 1 >= 0 ? '&#9733;' : '&#9734;' }}
                {{ $page.post.colin_rating - 2 >= 0 ? '&#9733;' : '&#9734;' }}
                {{ $page.post.colin_rating - 3 >= 0 ? '&#9733;' : '&#9734;' }}
                {{ $page.post.colin_rating - 4 >= 0 ? '&#9733;' : '&#9734;' }}
                {{ $page.post.colin_rating - 5 >= 0 ? '&#9733;' : '&#9734;' }}
            b-card-text {{ new Date($page.post.date).toLocaleDateString() }}
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
    colin_rating
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
.beer-post
  padding-top 80px
.stars
  color orange
  &:hover
    cursor default
</style>
