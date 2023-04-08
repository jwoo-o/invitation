import Vue from 'vue'
import VScrollLock from 'v-scroll-lock'
import App from './App.vue'
import Divider from './components/Divider.vue'
import Button from './components/Button.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueClipboard from 'vue-clipboard2'
import Notifications from 'vue-notification'

Vue.config.productionTip = false

Vue.use(VScrollLock)
Vue.use(VueClipboard)
Vue.use(Notifications)
Vue.component('Divider', Divider)
Vue.component('Button', Button)


new AOS.init()

new Vue({
  render: (h) => h(App)
}).$mount('#app')
