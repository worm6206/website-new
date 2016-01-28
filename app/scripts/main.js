angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home',{
				url: '/',
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			})
			.state('project',{
				url: '/project',
				templateUrl: 'templates/project.html',
				controller: 'projectCtrl'
			})
			.state('vi',{
				url: '/vi',
				templateUrl: 'templates/vi.html',
				controller: 'viCtrl'
			})
			.state('about',{
				url: '/about',
				templateUrl: 'templates/about.html',
				controller: 'aboutCtrl'
			})
	}])