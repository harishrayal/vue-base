import Bugsnag from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'
let bugsnagVue: any = null
if (import.meta.env.VITE_BUGSNAG_FLAG == 'on') {
    Bugsnag.start({
        apiKey: import.meta.env.VITE_BUGSNAG_API_KEY,
        plugins: [new BugsnagPluginVue()],
    })
    bugsnagVue = Bugsnag.getPlugin('vue')
}
export default bugsnagVue
