(function () {
    'use strict';

    angular.module('Data')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService','categories'];
    function CategoriesController(MenuDataService,categories) {
        var categoryList = this;
        categoryList.categories = categories.data;
    }

})();
