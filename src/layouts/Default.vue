<template lang="pug">
  .layout
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
.layout
  margin 0
  min-height 100vh
  padding 0
  width 100%
</style>
