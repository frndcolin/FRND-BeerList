<template lang="pug">
  b-navbar
    b-container
      b-navbar-brand(href="/") {{ $static.metadata.siteName }}
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.ml-auto
          b-nav-item.nav--link(href="/beer") Beers
          b-nav-item.nav--link(href="/admin/") Add Beer
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="stylus">
nav
  padding-top 1rem
  width 100%
.logo-home
  font-size 24px
  font-weight bold
  max-width 75%
  &:hover
    text-decoration none
.logo-desktop
  @media (max-width: 419px)
    display none
  @media (min-width: 420px)
    display default
.logo–mobile
  @media (max-width: 419px)
    display default
  @media (min-width: 420px)
    display none
.logo-image
  width 40px
.nav--link
  margin-left 20px
  @media (max-width: 419px)
    margin 0
    padding 15px 10px 10px 0
.active--exact
  font-weight bold
</style>
