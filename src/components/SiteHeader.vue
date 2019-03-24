<template>
  <header class="header">
    <b-navbar toggleable="lg" type="dark" class="fixed-top">
      <b-container fluid>
        <b-navbar-brand> <router-link class="nav-link" to="/">LOGO</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/jobs">Jobs</router-link>
          <router-link class="nav-link" to="/">Departments</router-link>
          <router-link class="nav-link" to="/">Contact</router-link>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
          </b-nav-form>

          <b-nav-item right>
            <div class="text-center">
                <font-awesome-icon icon="shopping-bag"></font-awesome-icon>
                <b-badge variant="light" class="shoppingbag">9 <span class="sr-only">Jobs</span></b-badge>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style scoped>
.fa-shopping-bag{
  font-size: 25px;
  color:#ffffff;
}
  .shoppingbag{
    color: #ffffff;
    background: transparent;
  }
</style>
