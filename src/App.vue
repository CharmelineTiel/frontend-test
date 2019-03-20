<template>
  <div id="app">
    <siteHeader />
    <jobDetails />
    <siteFooter />
    <!--<router-view/>-->
  </div>
</template>

<script>
import siteHeader from './components/SiteHeader'
import siteFooter from '@/components/SiteFooter'
import jobDetails from '@/components/JobDetails'
export default {
  name: 'App',
  components: {
    siteFooter,
    siteHeader,
    jobDetails
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
  h4{
    font-size: 18px;
    font-weight: 800;
  }
</style>
