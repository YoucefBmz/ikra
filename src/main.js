import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import VueRouter from 'vue-router'
import store from './store'
import VueAnalytics from 'vue-analytics'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed);

//Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" })

/////////////

const id = 'UA-162012751-1';

Vue.use(VueAnalytics, {
  // [Required] The name of your app as specified in Google Analytics.
  id: id,
  autoTracking: {
    screenview: true
  },
  router,
})

////////////////



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
