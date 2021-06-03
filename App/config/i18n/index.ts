import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from './translations/en.json';
import es from './translations/es.json';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;

I18n.translations = {
  es,
  en,
};

export default I18n;
