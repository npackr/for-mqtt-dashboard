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
import VueApollo from 'vue-apollo';
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'https://realm.mongodb.com/api/client/v2.0/app/mqtt-data-dashboard-djtyx/graphql',
  headers: {
    "apiKey": process.env.VUE_APP_REALM_APP_API_KEY,
  }
})

Vue.use(VueApollo);
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");



