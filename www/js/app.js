angular.module('ionicApp', ['ionic', 'ionicApp.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('presentations', {
      url: '/presentations',
      templateUrl: 'templates/presentations.html'
    })
    .state('speakers', {
      url: '/speakers',
      templateUrl: 'templates/speakers.html'
    })
    .state('feedback', {
      url: '/feedback',
      templateUrl: 'templates/feedback.html'
    })
    .state('map', {
      url: '/map',
      templateUrl: 'templates/map.html'
    })
    .state('vendors', {
      url: '/vendors',
      templateUrl: 'templates/vendors.html'
    })
    .state('information', {
      url: '/information',
      templateUrl: 'templates/information.html'
    })
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.sunday', {
      url: "/sunday",
      views: {
        'tab-sunday': {
          templateUrl: "templates/tab-sunday.html",
          controller: 'SundayCtrl'
        }
      }
    })
    .state('tabs.monday', {
      url: "/monday",
      views: {
        'tab-monday': {
          templateUrl: "templates/tab-monday.html",
          controller: 'MondayCtrl'
        }
      }
    })
    .state('tabs.tuesday', {
      url: "/tuesday",
      views: {
        'tab-tuesday': {
          templateUrl: "templates/tab-tuesday.html",
          controller: 'TuesdayCtrl'
        }
      }
    })
    
    .state('sunday-detail/:sessionId', {
      url: "/tab/sunday-detail/:sessionId",
          templateUrl: "/templates/detail.html",
          controller: 'SessionDetailCtrl'
    })
    
    .state('monday-detail/:sessionId', {
      url: "/tab/monday-detail/:sessionId",
          templateUrl: "/templates/detail.html",
          controller: 'SessionDetailCtrl'
    })
    
    .state('tuesday-detail/:sessionId', {
      url: "/tab/tuesday-detail/:sessionId",
          templateUrl: "/templates/detail.html",
          controller: 'SessionDetailCtrl'
    });


   $urlRouterProvider.otherwise("/tab/sunday");

});