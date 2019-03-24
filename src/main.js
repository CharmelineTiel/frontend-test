// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPrint, faShoppingBag, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedinIn, faGooglePlusG, faFacebookF, faYoutube, faPinterestP, faInstagram, faTumblr } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SimpleVueValidation from 'simple-vue-validator'

library.add(
  faEnvelope,
  faTwitter,
  faGooglePlusG,
  faLinkedinIn,
  faFacebookF,
  faPrint,
  faInstagram,
  faTumblr,
  faYoutube,
  faPinterestP,
  faShoppingBag,
  faCaretRight
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
Vue.use(SimpleVueValidation)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
