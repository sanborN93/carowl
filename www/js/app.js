// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.ion.imageCacheFactory', 'starter.controllers', 'starter.services', 'ngMaterial'])

.run(function($ionicPlatform, $ImageCacheFactory) {
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
		StatusBar.hide();
    }
    
      });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

	// --------------------------- konfiguration der states inkl. html-templates & zuweisung der controller ---------------------------
	// --------------------------- einigen states werden variablen mitgegeben ---------------------------
	$stateProvider
	
	.state('start', {
	url: '/start',
	templateUrl: 'templates/start.html',
	controller: 'startCtrl',
	})
	
	.state('config', {
	url: '/config',
	templateUrl: 'templates/config.html',
	controller: 'configCtrl',
	})
	
	.state('game', {
	url: '/game',
	templateUrl: 'templates/game.html',
	controller: 'gameCtrl',
	})
		      
	$urlRouterProvider.otherwise('/start'); 
	//$urlRouterProvider.otherwise('/game');    

});