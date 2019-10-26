<template lang="pug">
  layout
    b-container
      b-row(align-h='center')
        b-col(cols='6')
          img(src="../assets/images/404.svg")
</template>

<style scoped lang="stylus">
img
  margin auto
  width 80%
  @media (max-width: 500px)
    width 90%
  @media (max-width: 400px)
    width 100%
</style>
