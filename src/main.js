import '@/assets/css/tailwind.css'
import PortalVue from 'portal-vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionApi, { ref, provide } from '@vue/composition-api'
import { useSupercharge } from '@/composables/useSupercharge'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(PortalVue)
Vue.use(VueCompositionApi)
useSupercharge()

new Vue({
  router,
  setup() {
    const theme = ref(localStorage.getItem('theme') ?? 'dark')
    const toggleTheme = () => {
      if(theme.value === 'dark') theme.value = 'light'
      else theme.value = 'dark'
      localStorage.setItem('theme', theme.value)
    }
    provide('theme', theme)
    provide('toggleTheme', toggleTheme)
  },
  render: h => h(App)
}).$mount('#app')
