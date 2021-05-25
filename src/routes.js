(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
        .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })
    
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/main-categories.template.html',
        controller: 'CategoriesController as categoryList',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        } 
        
      })
      .state('categories.items', {
        //url: '/item-detail/{short_name}',
        templateUrl: 'src/menuapp/templates/items.template.html',
        controller: 'ItemController as itemDetail',
        params: {
          short_name: null
        },
        resolve: {
          items: ['$stateParams','MenuDataService',function ($stateParams,MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.short_name);
          }]
        }
      });
    
    }
    
    })();
/*     $state.current.params.short_name */