import 'i18next';
import { pt } from 'app/i18n/pt';
import { en } from 'app/i18n/en';

interface Ii18nNamespaces {
  pt: typeof pt;
  en: typeof en;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'pt';
    resources: Ii18nNamespaces;
  }
}
