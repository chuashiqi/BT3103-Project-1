import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import VueRouter from 'vue-router'

Vue.use(VueGoogleMaps, {
  load: {
    key: GOOGLE_MAPS_KEY,
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

Vue.use(VueRouter)
import Routescomp from "./routes.js"
const myRouter = new VueRouter({
  routes: Routescomp, 
  mode: "history"
})

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')
