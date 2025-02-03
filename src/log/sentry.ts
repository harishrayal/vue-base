import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

if (import.meta.env.VITE_SENTRY_FLAG == 'on') {
    const app = createApp(App)
    Sentry.init({
        app,
        dsn: import.meta.env.VITE_SENTRY_DSN,
        integrations: [
            new BrowserTracing({
                routingInstrumentation: Sentry.vueRouterInstrumentation(router),
                tracePropagationTargets: [
                    'localhost',
                    'http://localhost:5173',
                    /^\//,
                ],
            }),
        ],
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    })
}
