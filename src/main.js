// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
export const app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDEXqAisdbG5CwrOEMSJtvMa-W0Ozc8VXM',
      authDomain: 'youtube-devmeetup-a40dc.firebaseapp.com',
      databaseURL: 'https://youtube-devmeetup-a40dc.firebaseio.com',
      projectId: 'youtube-devmeetup-a40dc',
      storageBucket: 'youtube-devmeetup-a40dc.appspot.com'
    })
  }
})

window.store = store
window.vue = app
