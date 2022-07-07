import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ElementPlus from 'element-plus';
import { store } from './store'
import App from './App.vue'

const app = createApp(App);

library.add(fas, fab);
app
.use(ElementPlus)
.use(store)
.component('fa', FontAwesomeIcon)
.mount('#app');

