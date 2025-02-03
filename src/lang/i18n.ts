import { createI18n } from 'vue-i18n'
import en from '@/lang/en.json'
import ja from '@/lang/ja.json'

const message = {
    en: en,
    ja: ja,
}
const locale = 'ja'
const i18n = createI18n({
    locale: locale,
    fallbackLocale: 'en',
    messages: message,
})

export default i18n
