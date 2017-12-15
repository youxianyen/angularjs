var app = angular.module('app', []);
//弹出层
app.controller('AppCtrl', function($scope){
	$scope.loadMoreData = function(){
		alert ('正在加载数据...')
	}
	$scope.deleData = function(){
		alert ('正在删除数据...')
	}
});

app.directive('enter', function(){
	return function(scope, element, attrs){
        element.bind('mouseenter', function(){
            //scope.loadMoreData();
            //scope.$apply('loadMoreData()')
            scope.$apply(attrs.enter)
        })
	}
})