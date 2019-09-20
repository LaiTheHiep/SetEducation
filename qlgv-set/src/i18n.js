import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
        }
      },
      vn: {
        translations: {
          "Hello": "Chào bạn",
          "Login": "Đăng nhập",
          "This login will allow Google":"Đăng nhập này sẽ cho phép Google",
          "Control your devices":"Điều khiển thiết bị của bạn",
          "Connecting":"Đang kết nối",
          "Connected":"Đã kết nối",
          "Disconnected":"Mất kết nối",
          "UserName":"Tên đăng nhập",
          "Password":"Mật khẩu"
        }
      }
    },
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ','
    },

    react: {
      wait: true,
      defaultTransParent: true
    }
  });

export default i18n;
