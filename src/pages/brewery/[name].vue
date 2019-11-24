<template lang="pug">
  layout
    b-container.main
      b-row(align-h='center')
        b-col(cols='8')
          h1.title {{ $route.params.name }}
      b-row(align-h='center')
        b-col(cols='12' sm='10' md='6')
          beer-card(v-for='beer in beers' :beer='beer.node' :key='beer.node.id')
</template>

<script>
import BeerCard from "@/components/BeerCard.vue";
import { fetch } from "gridsome";

export default {
  data() {
    return {
      beers: []
    };
  },
  components: { BeerCard },
  async mounted() {
    const results = await fetch("/");
    this.beers = await results.data.beer.edges.filter(edge => {
      return edge.node.brewery.toLowerCase() === this.$route.params.name;
    });
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
