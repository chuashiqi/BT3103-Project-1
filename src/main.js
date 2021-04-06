import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import VueRouter from 'vue-router'

Vue.use(VueGoogleMaps, {
  load: {
    key:  "secrets.KEYTOKENFORGMAPS",
    libraries: "places" 
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
