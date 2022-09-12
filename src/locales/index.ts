import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js'
import en_us from './en-US'
import pt_br from './pt-BR'

const i18n = new I18n({
  en_US: en_us,
  pt_BR: pt_br
});

i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = 'en_US';

export const translate = (key: string) => i18n.t(key)
