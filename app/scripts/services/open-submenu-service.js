(function () {
  'use strict';

  angular.module('ramlEditorApp')
    .service('openSubMenuService', function openSubMenuService(
      $timeout,
      $window
    ) {

      var openSubMenu = function (scope, subMenuName) {
        $timeout(function () {
          $window.addEventListener('click', function self () {
            scope.$apply(function () {
              scope[subMenuName] = false;
            });

            $window.removeEventListener('click', self);
          });
        });

        scope[subMenuName] = true;
      };

      return {
        openSubMenu: openSubMenu
      };
    });
})();
