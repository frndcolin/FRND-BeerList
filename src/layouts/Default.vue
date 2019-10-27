<template lang="pug">
  .layout
    the-header
    #main
      slot
    the-footer
</template>

<script>
import TheFooter from "../components/TheFooter";
import TheHeader from "../components/TheHeader";

export default {
  components: {
    TheFooter,
    TheHeader
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
.layout
  background-image url('../assets/images/site-bg.jpg')
  background-origin border-box
  background-position center bottom
  background-repeat no-repeat
  background-size cover
  margin 0
  min-height 100vh
  padding 0
  width 100%
#main
  min-height 90vh
</style>
