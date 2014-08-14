angular.module('ionicApp.controllers', [])

.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})

.controller('SundayCtrl', ['$scope', '$http', function($scope, $http) {
 	$http.get('https://uba-videos.s3.amazonaws.com/uba-app/json/sunday.json').success(function(data) {
 		// console.log(data);
 		$scope.sessions = data;
 	});
 	
}])

.controller('MondayCtrl', ['$scope', '$http', function($scope, $http) {
 	$http.get('https://uba-videos.s3.amazonaws.com/uba-app/json/monday.json').success(function(data) {
 		// console.log(data);
 		$scope.sessions = data;
 	});
}])

.controller('TuesdayCtrl', ['$scope', '$http', function($scope, $http) {
 	$http.get('https://uba-videos.s3.amazonaws.com/uba-app/json/tuesday.json').success(function(data) {
 		// console.log(data);
 		$scope.sessions = data;
 	});
}])

.controller('SessionDetailCtrl', ['$scope', '$stateParams',
	function($scope, $stateParams, SessionsInfo)
	{	
		$scope.session = SessionsInfo.get($stateParams.sessionId);
	}
])

.controller('AppCtrl', function($scope, $ionicNavBarDelegate) {
	  $scope.goBack = function() {
    	$ionicNavBarDelegate.back();
  	  };
})





