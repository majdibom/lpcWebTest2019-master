'use strict';

angular.module('LpcWebTest2018')
    .filter('lpcTranslate',['LpcTranslateService','$rootScope', function(LpcTranslateService,$rootScope) {
            LpcTranslateService.loadProperties();
            $rootScope.properties = {}
            var filter = function(key,locale){
                if($rootScope.properties == undefined || $rootScope.properties[locale] === undefined || $rootScope.properties[locale][key] == undefined)
                    return ""
                return $rootScope.properties[locale][key]
            }
            //TODO
            return filter;  
    }]);
