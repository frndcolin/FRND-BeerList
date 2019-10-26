<template lang="pug">
  layout
    img.greet-image(src="../../uploads/hello.svg")
    h3.mt-5.mb-4 Getting started
</template>

<script>
export default {
  metaInfo: {
    title: "FRND-Beer-List"
  }
};
</script>

<style>
.greet-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
