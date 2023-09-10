import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { pt } from './pt';
import { en } from './en';
import { Platform } from 'react-native';

const translation = {
  pt,
  en,
};

const deviceLanguage = Platform.OS === 'android' ? 'en' : 'pt';

i18next.use(initReactI18next).init({
  defaultNS: deviceLanguage,
  compatibilityJSON: 'v3',
  lng: deviceLanguage,
  fallbackLng: 'pt',
  resources: translation,
});

i18next.addResourceBundle(deviceLanguage, deviceLanguage, translation[deviceLanguage], true, true);

export default i18next;
