'use strict';

/**
 * @ngdoc directive
 * @name bookingsAppApp.directive:dateSelector
 * @description
 * # dateSelector
 */
angular.module('bookingsAppApp')
  .directive('dateSelector', function () {
    return {
      templateUrl: 'views/date-selector.html',
      restrict: 'E'
      /**link: function postLink(scope, element, attrs) {
        element.text('this is the dateSelector directive');
      }**/
    };
  });
