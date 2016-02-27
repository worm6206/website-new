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
			.state('about',{
				url: '/about',
				templateUrl: 'templates/about.html',
				controller: 'aboutCtrl'
			})

//*************** PROJECTS **************

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
			.state('d3',{
				url: '/d3',
				templateUrl: 'templates/d3.html'
			})
			.state('csv',{
				url: '/csv',
				templateUrl: 'templates/d3/csv.html'
			})
			.state('tsv',{
				url: '/tsv',
				templateUrl: 'templates/d3/tsv.html'
			})
	}])
	.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
	     $rootScope
	        .$on('$stateChangeSuccess',
	            function(event){
	 
	                if (!$window.ga)
	                    return;
	 
	                $window.ga('send', 'pageview', { page: $location.path() });
	        });
	}]);