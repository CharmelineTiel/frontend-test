<template>
  <header class="header">
    <b-navbar toggleable="lg" type="dark" class="fixed-top">
      <b-container fluid>
        <b-navbar-brand> <router-link class="nav-link" to="/jobs">LOGO</router-link></b-navbar-brand>
        <b-navbar-toggle target="nav_collapse" />
        <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-navbar-toggle class="closeNav" target="nav_collapse" />
          <b-nav-item disabled>Home</b-nav-item>
          <li class="nav-item"><router-link to="/jobs">Jobs</router-link></li>
          <b-nav-item disabled>Departments</b-nav-item>
          <b-nav-item disabled>Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
        <b-navbar-nav class="search">
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search for jobs by keyword" />
          <span class="bag">
            <font-awesome-icon icon="shopping-bag"></font-awesome-icon>
            <b-badge variant="light" class="shoppingbag">1<span class="sr-only">Jobs</span></b-badge>
          </span>
        </b-navbar-nav>
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
@media (max-width: 960px) {
  .search{
    width: 100%;
  }
  .navbar-collapse {
    background: #000000;
    width: 200px;
    display: block;
    position: fixed;
    left: -200px;
    top: 0px;
    -webkit-transition: left 0.25s ease-in-out;
    -moz-transition: left 0.25s ease-in-out;
    -ms-transition: left 0.25s ease-in-out;
    -o-transition: left 0.25s ease-in-out;
    transition: left 0.25s ease-in-out!important;
    margin: 0;
    border: 0;
    border-radius: 0;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    z-index: 999;
  }
  #nav_collapse > ul > li {
    padding: 15px;
    font-size: 20px;
  }
  .bag {
    max-width: 50px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .bag > span{
    position: static!important;
  }
  .navbar-brand{
    position: relative;
    top: -7px;
    left: 50px;
    right: 0;
  }

  .closeNav.navbar-toggler{
    position: absolute;
    left: -145px;
    top: 5px;
  }
  .navbar-toggler{
    position: absolute;
    left: 0;
    top: 5px;
  }
  #nav_collapse > ul > li:nth-child(2){
    margin-top: 50px;
  }
  .closeNav:after{
    position: absolute;
    left: 160px;
    content: 'X';
    color: #ffffff;
  }
}

.navbar-collapse.collapse.show{
  left: 0px;
  -webkit-transition: left 0.25s ease;
  -moz-transition: left 0.25s ease;
  -ms-transition: left 0.25s ease;
  -o-transition: left 0.25s ease;
  transition: left 0.25s ease!important;
  }
  .collapsing{
    height: 100%!important;
  }
#nav_collapse > ul > li {
  padding: 15px;
  font-weight: 700;
}
  #nav_collapse{
    max-width: 60%;
  }
  .search{
    min-width: 400px;
  }
  .bag{
    max-width: 50px;
  }
  .bag > span{
    position: absolute;
    right: 10px;
    top: 30px;
  }

</style>
