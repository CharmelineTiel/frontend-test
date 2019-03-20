<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col>
          <h4>JOBS AT</h4>
          <li v-for="item in sitemap" :key="item.id">
            {{item.name}}
          </li>
        </b-col>
        <b-col>
          <h4>INFORMATION</h4>
          tst
        </b-col>
        <b-col>
          <h4>FOLLOW US</h4>
          <li v-for="item in socialMedia" :key="item.id">
            {{item.name}}
          </li>
        </b-col>
        <b-col>
          <h4>JOBS ALERT</h4>

          col
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <div class="copyright">Copyright 2019 - Ctiel</div>
    </b-container>
  </footer>

</template>

<script>
export default {
  name: 'SiteFooter',
  data: function () {
    return {
      sitemap: [
        {name: 'jobs', id: 1},
        {name: 'home', id: 2},
        {name: 'department', id: 3}
      ],
      socialMedia: [
        {name: 'Google', link: 1},
        {name: 'Facebook', link: 2},
        {name: 'Twitter', link: 3},
        {name: 'Instagram', link: 3},
        {name: 'Newsletter', link: 3},
        {name: 'Pinterest', link: 3},
        {name: 'Tumblr', link: 3},
        {name: 'YouTube', link: 3},
        {name: 'Linkedin', link: 3}
      ],
      information: '',
      jobAlert: ''

    }
  }
}
</script>

<style scoped>
.footer{
  padding-top: 50px;
}
  .copyright{
    margin-top: 0;
    padding: 20px;
    text-align: left;
    background:#f7f7f7;
    font-size: 12px;
  }
  .footer .container-fluid {
    padding: 0;
  }
</style>
