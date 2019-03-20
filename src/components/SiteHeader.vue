<template>
  <header class="header">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">LOGO</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#" disabled>HOME</b-nav-item>
          <b-nav-item href="#">JOBS</b-nav-item>
          <b-nav-item href="#">DEPARTMENTS</b-nav-item>
          <b-nav-item href="#">CONTACT</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
          </b-nav-form>

          <b-nav-item right>
            <b-nav-item href="#">CART</b-nav-item>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style scoped>

</style>
