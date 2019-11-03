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
              stars(:ratingScore='$page.post.colin_rating' ratedBy='Colin' starColor='blue')
              stars(:ratingScore='$page.post.caitie_rating' ratedBy='Caitie' starColor='orange')
            b-card-text.date {{ new Date($page.post.date).toLocaleDateString() }}
</template>

<page-query>
query BeerPost ($path: String!) {
  post: beerPost (path: $path) {
    name
    brewery
    date
    timeToRead
    description
    image
    colin_rating
  }
}
</page-query>

<script>
import BeerContent from "@/components/BeerContent";
import Stars from "@/components/Stars.vue";

export default {
  components: {
    BeerContent,
    Stars
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
.date
  color #9f9f9f
  font-size 16px
  text-align right
</style>
