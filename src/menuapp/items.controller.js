(function () {
    'use strict';

    angular.module('Data')
    .controller('ItemController', ItemController);

    ItemController.$inject = ['MenuDataService','$stateParams','items'];
    function ItemController(MenuDataService,$stateParams,items) {
        var itemDetail = this;
        itemDetail.items = items.data.menu_items; 
    }

})();