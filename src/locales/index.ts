/**
 * index.ts
 * Holds translation functions
 */

import { Platform, NativeModules } from 'react-native'

//Translation packages
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js'

//Language strings
import en_us from './en-US'
import pt_br from './pt-BR'

const i18n = new I18n({
  en_US: en_us,
  pt_BR: pt_br
});

// Normalize the language code received by getLanguageByDevice
interface NormalizeTranslate { 
  [key: string]: string 
} 

const normalizeTranslate: NormalizeTranslate = {
  'en_US': 'en_US',
  'en-US': 'en_US',
  'pt_BR': 'pt_BR',
  'pt-BR': 'pt_BR',
  'en': 'en_US',
  'pt': 'pt_BR',
}

//Get device language
const getLanguageByDevice = () :string => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier
}

//Check if device language is supported, otherwise use 'en_US'
const setLanguageToI18n = () => {
  const language = getLanguageByDevice()
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage = i18n.translations.hasOwnProperty(translateNormalize)
  iHaveThisLanguage
    ? i18n.locale = translateNormalize
    : i18n.locale = 'en_US'
}

i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = 'en_US';

setLanguageToI18n()

export const translate = (key: string) => i18n.t(key)
