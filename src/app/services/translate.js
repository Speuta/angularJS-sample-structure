angular.module('angularTranslateApp', ['pascalprecht.translate'])
    .config(function($translateProvider) {
        $translateProvider.registerAvailableLanguageKeys(['fr', 'en']);

        $translateProvider.translations('fr', {
            TRANSLATION_EXAMPLE: "Salut",
            CHANGE_LANG: "Changer de langue",
        });

        $translateProvider.translations('en', {
            TRANSLATION_EXAMPLE: "Hello",
            CHANGE_LANG: "Change language"
        });

        $translateProvider.preferredLanguage('fr');
    });
