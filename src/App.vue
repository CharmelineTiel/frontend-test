<template>
  <div id="app">
    <siteHeader />
    <router-view/>
    <siteFooter />
  </div>
</template>

<script>
import siteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
export default {
  name: 'App',
  components: {
    SiteHeader,
    siteFooter
  }
}
</script>

<style>
  html,
  body {
    font-size: 17px;
    margin:0;
    padding:0;
    height:100%;
  }
  a{
    color: #6c757d;
  }
  a:hover{
    color: #7d8c95;
    text-decoration: none;
  }
  .nav-link {
    padding: 0;
  }
.btn a{
  color: #ffffff;
  text-decoration: none;
}
btn a:hover{
  color: #ffffff;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height:100%;
  position:relative;
}
  #app > div{
    margin-top: 60px;
  }
  h1{
    font-weight: 700;
  }
  h4{
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 20px 0;
  }
.btn {
  border-radius: 0;
}
  .navbar{
    padding: 0.7rem 1rem;
    background-color: #000000;
  }
  .page-title{
    text-align: center;
    min-height: 450px;
    /*background: url('~@/assets/retail-bg.jpg') no-repeat center center;*/
    background-size: cover;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page-title .container{
    background: #00000070;
    text-transform: uppercase;
    padding: 40px;
  }
</style>
