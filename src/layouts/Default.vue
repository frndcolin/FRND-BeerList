<template lang="pug">
  .layout
    #content-wrapper
      header
      slot
    footer
</template>

<script>
import Footer from "../components/Footer";
import Header from "../components/Header";

export default {
  components: {
    Footer,
    Header
  }
};
</script>


<style lang="stylus">
body, html
  height 100%
body
  font-family -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  line-height 1.5
  margin 0
  padding 0
#app
  display flex
  flex-direction column
  height 100%
#content-wrapper
  flex 1 0 auto
  margin 0 auto
  max-width 950px
  width 90vw
</style>
