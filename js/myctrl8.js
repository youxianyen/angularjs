angular.module('app', [])
.factory('Data', function(){
	return {
		msg: '我来自factory',
		shopcart: ['1', '2']
	}
})
.controller('Fctrl', function($scope, Data){ //下单ctrl
	$scope.data = Data;
	
})
.controller('Sctrl', function($scope, Data){ //购物车
	$scope.data = Data;
	
})
