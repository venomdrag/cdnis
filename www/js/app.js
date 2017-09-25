// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $animateProvider) {  

   $stateProvider
     .state('home', {
         url: '/',
         templateUrl: 'templates/home.html',
         controller: 'HomeCtrl'
      }) 
     .state('urgent-messages', {
         url: '/urgent-messages',
         templateUrl: 'templates/urgent-messages.html',
         controller: 'UrgentMessagesCtrl'
      })
     .state('calendar', {
         url: '/calendar',
         templateUrl: 'templates/calendar.html',
         controller: 'CalendarCtrl'
      }) 
     .state('news', {
         url: '/news',
         templateUrl: 'templates/news.html',
         controller: 'NewsCtrl'
      }) 
     .state('timberwolves', {
         url: '/timberwolves',
         templateUrl: 'templates/timberwolves.html',
         controller: 'TimberwolvesCtrl'
      })  
     .state('school-info', {
         url: '/school-info',
         templateUrl: 'templates/school-info.html',
         controller: 'SchoolInfoCtrl'
      }) 
     .state('single-school-info', {
         url: '/single-school-info/:id',
         templateUrl: 'templates/single-school-info.html',
         controller: 'SingleSchoolInfoCtrl'
      })      
     .state('contact', {
         url: '/contact',
         templateUrl: 'templates/contact.html',
         controller: 'ContactCtrl'
      }) 
     .state('social-media', {
         url: '/social-media',
         templateUrl: 'templates/social-media.html',
         controller: 'SocialMediaCtrl'
      })
     .state('staff-blogs', {
         url: '/staff-blogs',
         templateUrl: 'templates/staff-blogs.html',
         controller: 'StaffBlogsCtrl'
      })
     .state('absent-note', {
         url: '/absent-note',
         templateUrl: 'templates/absent-note.html',
         controller: 'AbsentNoteCtrl'
      })  
     .state('single-urgent-message', {
         url: '/single-urgent-message/:id',
         templateUrl: 'templates/single-urgent-message.html',
         controller: 'SingleUrgentMessageCtrl'
      }) 
     .state('single-flash', {
         url: '/single-flash/:id',
         templateUrl: 'templates/single-flash.html',
         controller: 'SingleFlashCtrl'
      })        
     .state('whats-going-on', {
         url: '/whats-going-on',
         templateUrl: 'templates/whats-going-on.html',
         controller: 'WhatsGoingOnCtrl'
      }) 
     .state('news-single', {
         url: '/news-single/:id',
         templateUrl: 'templates/news-single.html',
         controller: 'NewsSingleCtrl'
      })   
     .state('flash', {
         url: '/flash',
         templateUrl: 'templates/flash.html',
         controller: 'FlashCtrl'
      })                                                        
      .state('menu', {
         url: '/menu',
         templateUrl: 'templates/menu.html',
         controller: 'MenuCtrl'
      });

  $urlRouterProvider.otherwise('/');

  //$animateProvider.classNameFilter(/^((?!(no-animate)).)*$/);
});