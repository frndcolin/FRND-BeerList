<template lang="pug">
  .layout
    #content-wrapper
      the-header
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
