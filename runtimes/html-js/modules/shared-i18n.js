// Arrow
// HTML-JS Runtime
// Mor. H. Golkar

// i18n
// (internationalization)

const _SUPPORTED_LOCALES = ["en"];

const _TRANSLATION_TABLE = {
  continue: {
    en: "Continue",
  },
  false: {
    en: "False",
  },
  true: {
    en: "True",
  },
  defaultCheckboxClickableLabelText:{
    en: "Positive!",
  },
  evaluate:{
    en: "Evaluate",
  },
  end_of_play: {
    en: "The End !",
  },
};


function i18n(string_id, lang){
    // default to `_LOCALE` if the target `lang` is not annotated or supported 
    if ( _SUPPORTED_LOCALES.includes(lang) == false ) lang = _LOCALE;
    if ( _TRANSLATION_TABLE.hasOwnProperty(string_id) ) {
        if ( _TRANSLATION_TABLE[string_id].hasOwnProperty(lang) ) {
            return _TRANSLATION_TABLE[string_id][lang];
        } else {
            throw new Error(`Incomplete Translation Table: value for the selected locale doesn't exist! _TRANSLATION_TABLE[${string_id}][${lang}]`);
        }
    } else {
        throw new Error(`I18n translation table doesn't include the string id: ${string_id} `);
    }
}