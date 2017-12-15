angular.module('app', [])
.controller('myctrl5', function($scope){
	$scope.msg = '';
	$scope.reverse = function(){
		return $scope.msg.split("").reverse().join("");
	}
})
