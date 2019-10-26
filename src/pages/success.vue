<template lang="pug">
  layout
    h1.mb-4 Success!
    img.mail-image(src="../assets/images/mail-sent.svg")
    h3.mt-5(text-center) Your mail was successfully sent!
</template>

<script>
export default {
  metaInfo: {
    title: "Success"
  }
};
</script>

<style lang="stylus">
.mail-image
  display block
  margin auto
  max-width 500px
  width 90%
</style>

