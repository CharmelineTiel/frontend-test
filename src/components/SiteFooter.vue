<template>
  <footer class="footer">
    <back-to-top text="Back to top"></back-to-top>
    <b-container>
      <hr>
      <b-row>
        <b-col cols sm="12" md="3" lg="3">
          <h4>JOBS AT</h4>
          <router-link class="nav-link" to="/jobs">Home</router-link>
          <router-link class="nav-link" to="/jobs">Jobs</router-link>
          <router-link class="nav-link" to="/jobs">Department</router-link>
          <router-link class="nav-link" to="/jobs">Contact</router-link>
        </b-col>
        <b-col cols sm="12" md="3" lg="3">
          <h4>INFORMATION</h4>
          <router-link class="nav-link" to="/jobs">F.A.Q</router-link>
          <router-link class="nav-link" to="/jobs">Application Procedure</router-link>
          <router-link class="nav-link" to="/jobs">Privacy Policy</router-link>
          <router-link class="nav-link" to="/jobs">Contact</router-link>
        </b-col>
        <b-col cols="12" sm="12" md="auto" lg="auto">
          <h4>FOLLOW US</h4>
          <ul class="followUs">
          <li v-for="item in socialMedia" :key="item.id">
            <a v-if="item.prefix === ''">
            <font-awesome-icon v-bind:icon="item.icon"></font-awesome-icon>
              <span> {{item.name}} </span>
            </a>
            <a v-else>
            <font-awesome-icon v-bind:icon="{prefix: item.prefix, iconName: item.icon}"></font-awesome-icon>
              <span>{{item.name}}</span>
            </a>
          </li>
          </ul>
        </b-col>
        <b-col col-sm="12" col-lg="3">
          <h4>G-STAR CAREER ALERT</h4>
          <b-input-group class="mt-3">
            <b-form-input placeholder="Email Address" />
            <b-input-group-append>
              <b-button><font-awesome-icon icon="caret-right"></font-awesome-icon>
              </b-button>
            </b-input-group-append>
          </b-input-group>
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
        {name: 'jobs'},
        {name: 'home'},
        {name: 'department'}
      ],
      socialMedia: [
        {name: 'Google', link: '#', icon: 'google-plus-g', prefix: 'fab'},
        {name: 'Facebook', link: '#', icon: 'facebook-f', prefix: 'fab'},
        {name: 'Twitter', link: '', icon: 'twitter', prefix: 'fab'},
        {name: 'Instagram', link: '', icon: 'instagram', prefix: 'fab'},
        {name: 'Newsletter', link: '', icon: 'envelope', prefix: ''},
        {name: 'Pinterest', link: '', icon: 'pinterest-p', prefix: 'fab'},
        {name: 'Tumblr', link: '', icon: 'tumblr', prefix: 'fab'},
        {name: 'YouTube', link: '', icon: 'youtube', prefix: 'fab'},
        {name: 'Linkedin', link: '', icon: 'linkedin-in', prefix: 'fab'}
      ],
      information: '',
      jobAlert: ''

    }
  }
}
</script>

<style scoped>
.footer{
  position: absolute;
  height: 60px;
  width: 100%;
  bottom: 0px;
  background: #ffffff;
}
  .copyright{
    margin-top: 20px;
    padding: 20px;
    text-align: left;
    background:#f7f7f7;
    font-size: 12px;
  }
  .footer .container-fluid {
    padding: 0;
  }
  .followUs{
    padding: 0;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 160px);
    grid-template-rows: 25px;
  }
  .followUs li{
    list-style-type: none;
    padding-right: 5px;
  }
.followUs li a {
  list-style-type: none;
  color: grey;
  text-align: center;
}
.vue-back-to-top{
  position: absolute;
  right: 0;
  top: -32px;
  color: #000000;
  border:0;
}
.followUs li a > svg{
  border: 1px solid grey;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
}
.followUs span{
  cursor: pointer;
}
</style>
