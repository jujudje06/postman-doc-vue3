import { createI18n } from 'vue-i18n'
import messages from '../i18n/en-us/index'

export default ({ app }) => {
  const i18n = createI18n({
    locale: 'en-US',
    messages
  })

  // Tell app to use the I18n instance
  app.use(i18n)
}
