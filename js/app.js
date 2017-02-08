angular.module('mitknits', ['ngRoute'])
.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	})
	.when('/news', {
		templateUrl: 'views/news.html',
		controller: 'NewsController'
	})
	.when('/designs', {
		templateUrl: 'views/design.html',
		controller: 'DesignController'
	})
	.when('/contactus', {
		templateUrl: 'views/contactus.html',
		controller: 'ContactUsController'
	})
	.when('/aboutus', {
		templateUrl: 'views/about.html',
		controller: 'AboutUsController'
	})
});
