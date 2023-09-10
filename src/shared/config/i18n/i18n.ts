import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

void i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: true,

        interpolation: {
            // eslint-disable-next-line no-undef
            escapeValue: _IS_DEV_, // not needed for react as it escapes by default
        },
    })

export default i18n
