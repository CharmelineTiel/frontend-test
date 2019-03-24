<template>
  <footer class="footer">
    <b-container>
      <hr>
      <b-row>
        <b-col>
          <h4>JOBS AT</h4>
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/jobs">Jobs</router-link>
            <router-link class="nav-link" to="/">Departments</router-link>
            <router-link class="nav-link" to="/">Contact</router-link>
        </b-col>
        <b-col>
          <h4>INFORMATION</h4>
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/jobs">Jobs</router-link>
          <router-link class="nav-link" to="/">Departments</router-link>
          <router-link class="nav-link" to="/">Contact</router-link>
        </b-col>
        <b-col>
          <h4>FOLLOW US</h4>
          <ul class="followUs">
          <li v-for="item in socialMedia" :key="item.id">
            <a v-if="item.prefix === ''">
            <font-awesome-icon v-bind:icon="item.icon"></font-awesome-icon>
            </a>
            <a v-else>
            <font-awesome-icon v-bind:icon="{prefix: item.prefix, iconName: item.icon}"></font-awesome-icon>
            </a>
            {{item.name}}
          </li>
          </ul>
        </b-col>
        <b-col>
          <h4>G-STAR CAREER ALERT</h4>
          <!-- Using components -->
          <div v-if="!submitted">
          <b-input-group class="mt-3">
            <b-form-input   v-model="email"  v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}" v-on:blur="emailBlured = true" />
            <b-input-group-append>
              <b-button v-on:click.stop.prevent="submit"><font-awesome-icon icon="caret-right"></font-awesome-icon>
              </b-button>
            </b-input-group-append>
          </b-input-group>
          </div>
          <div v-else class="alert alert-success" role="alert">
            <h5>Thank you</h5>
            <p>You are now subscribed to the G-star alerts!</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <div class="copyright" fixed-bottom>Copyright 2019 - Ctiel</div>
    </b-container>
  </footer>

</template>

<script>
export default {
  name: 'SiteFooter',
  computed: {
    state () {
      return this.email.length >= 4
    },
    invalidFeedback () {
      if (this.email.length > 4) {
        return ''
      } else if (this.email.length > 0) {
        return 'Enter at least 4 characters'
      } else {
        return 'Please enter something'
      }
    },
    validFeedback () {
      return this.state === true ? 'Thank you' : ''
    }
  },
  data: function () {
    return {
      email: '',
      emailBlured: false,
      valid: false,
      submitted: false,
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
  },
  methods: {
    validate: function () {
      this.emailBlured = true
      if (this.validEmail(this.email)) {
        this.valid = true
      }
    },
    validEmail: function (email) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/
      return re.test(email.toLowerCase())
    },
    submit: function () {
      this.validate()
      if (this.valid) {
        // submit to fake server
        this.submitted = true
      }
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
    margin-top: 0;
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
  border: 2px solid darkgrey;
  width: 30px;
  height: 30px;
  float:left;
  clear:both;
  border-radius: 50%;
  color: grey;
  text-align: center;
  margin-right: 5px;
}
</style>
