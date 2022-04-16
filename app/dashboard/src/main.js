/*
 =========================================================
 * Vue Black Dashboard - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";
import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'

// import ApolloClient from 'apollo-boost'
// import VueApollo from 'vue-apollo';

// Vue.use(VueApollo);

// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient,
// })

// const apolloClient = new ApolloClient({
//   // You should use an absolute URL here
//   uri: 'https://realm.mongodb.com/api/client/v2.0/app/mqtt-data-dashboard-djtyx/graphql'
// })

Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  // apolloProvider,
  render: h => h(App)
}).$mount("#app");



