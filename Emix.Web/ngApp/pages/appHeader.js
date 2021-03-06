﻿

angular.module('emixApp.controllers').controller('appHeader', ['$scope', '$window', '$location', '$translate', function ($scope, $window, $location, $translate) {
    'use strict';

    $scope.isMenuActive = function (path) {
        return $location.path().substr(0, path.length) === path;
    };

    $scope.isLanguageActive = function (language) {
        return language === $translate.use();
    };

    $scope.changeLanguage = function (language) {
        //set cookie value according to translator plugin.
        //the probably methods are internal => possible issues
        $translate.storage().set($translate.storageKey(), language);

        $window.location.reload(); //refresh current page reloading correct culture
    };
}]);
