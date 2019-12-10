'use strict';

angular.module('LpcWebTest2018')
    .directive('lpcLazyBackground', [function () {
  var lpcLazyBackgroundLink = function (scope, elem, attr) {
    var src = scope.lpcLazyBackground;
    var img = document.createElement('img');
    var loader = angular.element("<img src='app/img/loading.svg' />");
    elem.append(loader)
    img.onload = function() {
        loader.remove()
        elem.css({
            'background-image': 'url(' + this.src + ')'
        });
        delete this;
    }
    img.onerror= function() {
        console.log('error');
    };
    img.src = src;
  }
  return {
    restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
  }

}]);
