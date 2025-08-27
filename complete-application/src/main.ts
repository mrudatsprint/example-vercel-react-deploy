import './assets/main.css'
import '@fusionauth/vue-sdk/dist/style.css';

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import FusionAuthVuePlugin from '@fusionauth/vue-sdk';

const app = createApp(App)

app.use(FusionAuthVuePlugin, {
  clientId: 'f6eaf685-645a-4b7f-bd88-1a251f66b94a',
  serverUrl: 'https://fusionauth.rudedawg-integration.com',
  redirectUri: 'https://bank.rudedawg-integration.com',
  postLogoutRedirectUri: 'https://bank.rudedawg-integration.com',
  shouldAutoFetchUserInfo: true,
  shouldAutoRefresh: true,
  scope: 'openid email profile offline_access'
});

app.use(router)

app.mount('#app')
