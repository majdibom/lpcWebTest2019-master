angular.module('LpcWebTest2018')
    .service('LpcTranslateService',['$http','$rootScope',function($http,$rootScope){
            var propertyUrl;
            
            $rootScope.changeLocale = function(locale) {
                localStorage.removeItem("old_locale")
                localStorage.setItem("old_locale", $rootScope.locale)                
                $rootScope.locale = locale
            }

            setPropertiesUrlImpl = function(url){
                $rootScope.locale = localStorage.getItem("old_locale") || 'fr';
                propertyUrl = url;
            },
            loadPropertiesImpl = function(){
                $http.get(propertyUrl).success(function (response) {
                    $rootScope.properties = response;
                })
            }

        return {
            setPropertiesUrl : setPropertiesUrlImpl,
            loadProperties : loadPropertiesImpl
        }
    }]);
