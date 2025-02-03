import '@/log/sentry'
import App from '@/App.vue'
import bugsnagVue from '@/log/bugsnag'
import Bugsnag from '@bugsnag/js'
import { createApp } from 'vue'
const app = createApp(App)
if (bugsnagVue) {
    app.use(bugsnagVue)

    app.config.errorHandler = (err: any) => {
        Bugsnag.notify(new Error(err))
    }
}
