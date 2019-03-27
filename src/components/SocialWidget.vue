<template>
<div class="social-widget-container">
  <h4>share this job</h4>
  <span class="social-widget" v-for="socialLink in socialLinks" :key="socialLink.id">
    <a v-bind:href="socialLink.link"><li>
    <span v-if="socialLink.prefix === ''">
     <font-awesome-icon v-bind:icon="socialLink.icon"></font-awesome-icon>
    </span>
    <span v-else>
      <font-awesome-icon  v-bind:icon="{prefix: socialLink.prefix, iconName: socialLink.icon}"></font-awesome-icon>
    </span>
  </li>
    </a>
  </span>
</div>
</template>

<script>
export default {
  name: 'SocialWidget',
  data: function () {
    return {
      socialLinks: [
        {name: 'Twitter', link: '#', prefix: 'fab', icon: 'twitter', id: 1},
        {name: 'Facebook', link: '#', prefix: 'fab', icon: 'facebook-f', id: 2},
        {name: 'Linkedin', link: '#', prefix: 'fab', icon: 'linkedin-in', id: 3},
        {name: 'Google+', link: '#', prefix: 'fab', icon: 'google-plus-g', id: 4},
        {name: 'Email', link: '#', prefix: '', icon: 'envelope', id: 5},
        {name: 'Print', link: '#', prefix: '', icon: 'print', id: 6}
      ]
    }
  }
}
</script>

<style scoped>
  .social-widget{
    margin:0;
    padding: 0;
  }
.social-widget li{
  float:left;
  list-style-type: none;
  background: darkgrey;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  margin-right: 5px;
}
  .social-widget span{
    line-height: 35px;
  }
.social-widget li:hover{
  background: dimgrey;
}
  .social-widget-container{
    padding-bottom: 30px;
  }
</style>
