import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";
import VueRouter from 'vue-router'
import VCalendar from 'v-calendar';
import VMdDateRangePicker from "v-md-date-range-picker";

Vue.use(VMdDateRangePicker);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCIDHnPjZ2zGjONtpVdRN4xsEjcD5ye5Zs",
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

Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')
