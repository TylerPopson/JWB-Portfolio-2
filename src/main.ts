import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faHouse, faUser, faEnvelope, faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { faSoundcloud, faTwitter, faFacebook, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'

import './index.css'

library.add(faUserSecret, faHouse, faUser, faEnvelope, faHeadphones, faSoundcloud, faTwitter, faFacebook, faInstagram, faSpotify)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
