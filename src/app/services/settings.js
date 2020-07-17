angular.module('settings', [])
    .factory('settings', function() {
        const _mySettingsConstant = 'example';

        const _mySettingsFunction = function(myParam){
            return myParam;
        };

        return {
            mySettingsConstant: _mySettingsConstant,
            mySettingsFunction: _mySettingsFunction,
        };
    });
