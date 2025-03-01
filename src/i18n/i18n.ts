import { createI18n } from 'vue-i18n'
import defaultZh from '@/i18n/default/zh.json'
import defaultEn from '@/i18n/default/en.json'
import settingsZh from '@/i18n/settings/zh.json'
import settingsEn from '@/i18n/settings/en.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  messages: {
    'zh': {
      ...defaultZh,
      settings: settingsZh,
    },
    'en-US': {
      ...defaultEn,
      settings: settingsEn,
    },
  },
  fallbackLocale: 'en',
})
