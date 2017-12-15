//ng-bind, {{}}, ng-model, ng-show/hide, ng-if
//ng-checked, ng-src, ng-href, ng-class, ng-selected, ng-submit, 
angular.module('app', [])
.config(function($httpProvider){

})
.controller('MyCtrl', function($scope, $http){ //
	$scope.name = '';
	$scope.adduser = function(){
		$http.post('__URL__/adduser', {name:$scope.name})
		.success(function(resp){
	        if (resp.success) {
	        	alert('添加成功');
	        }
		});
	}
})
