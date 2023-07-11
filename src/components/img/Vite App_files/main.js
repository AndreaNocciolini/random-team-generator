import "/src/assets/main.scss?t=1689079096368"

import { createApp } from "/node_modules/.vite/deps/vue.js?v=d30ebbe9"
import { createPinia } from "/node_modules/.vite/deps/pinia.js?v=4d500c4e"


import App from "/src/App.vue?t=1689078718167"
import router from "/src/router/index.js?t=1689075566655"

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
